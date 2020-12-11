//
//  ArtistView.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/01.
//

import SwiftUI

struct ArtistView: View {
    init(id: Int) {
        self.id = id
    }
    
    @EnvironmentObject private var eventLogger: EventLogger
    @StateObject private var viewModel = ArtistViewModel()
    private let id: Int
    
    var body: some View {
        content
    }
    
    @ViewBuilder
    private var content: some View {
        if let artist = viewModel.artist {
            GeometryReader { geometry in
                let width = geometry.size.width
                ScrollView {
                    VStack(spacing: 24) {
                        ArtistThumbnail(artist: artist)
                        
                        VStack {
                            SectionTitle(width: width, title: "노래") {
                                ChartList(title: "노래", tracks: artist.tracks)
                                    .logTransition(eventLogger: eventLogger,
                                                   identifier: .trackList, componentId: .sectionTitle(category: "노래"))
                            }
                            
                            VStack(spacing: 12) {
                                ForEach(artist.tracks, id: \.id) { track in
                                    TrackRowB(track: track)
                                }
                                .frame(width: width * .sectionRatio)
                            }
                            .padding(.horizontal, width * .paddingRatio)
                        }
                        
                        AlbumSection(width: width, title: "앨범", albums: []) {
                            ArtistAlbumGridView(
                                title: "앨범",
                                categories: ["전체", "정규", "비정규", "참여"]
                            )
                            .logTransition(eventLogger: eventLogger,
                                           identifier: .artistAlbumList,
                                           
                                           componentId: .sectionTitle(category: "앨범"))

                        }
                        
                        ArtistSection(width: width,
                                      sectionTitle: "비슷한 아티스트")
                        
                        PlayListSection(width: width,
                                        title: "관련 플레이리스트",
                                        playlists: []) {
                            ThumbnailList(info: .playlist(data: []),
                                          navigationTitle: "관련 플레이리스트")
                                .logTransition(eventLogger: eventLogger,
                                               identifier: .playlists(id: 0),
                                               
                                               componentId: .sectionTitle(category: "관련 플레이리스트"))
                        }
                    }
                }
                .sheet(isPresented: $viewModel.isOpenMenu) {
                    ArtistMenu(artist: artist)
                        .logTransition(eventLogger: eventLogger,
                                       identifier: .artistMenu(id: artist.id),
                                       componentId: .sectionTitle(category: "관련 플레이리스트"))
                }
                .navigationTitle(artist.name)
                .navigationBarItems(trailing: trailingBarButtons)
                .navigationBarTitleDisplayMode(.inline)
                .padding(.bottom, 70)
            }
        } else {
            Color.clear
                .onAppear {
                    viewModel.send(.appear(artistID: id))
                }
        }
    }
    
    var trailingBarButtons: some View {
        HStack(spacing: 10) {
            Button {
                
            } label: {  Image(systemName: "heart") }
            
            Button {
                viewModel.send(.showArtistMenu)
            } label: { Image(systemName: "ellipsis")  }
        }
        .font(.system(size: 17))
        .foregroundColor(.black)
    }
}

struct ArtistView_Previews: PreviewProvider {
    static var previews: some View {
        NavigationView {
            ArtistView(id: 3)
        }
    }
}
