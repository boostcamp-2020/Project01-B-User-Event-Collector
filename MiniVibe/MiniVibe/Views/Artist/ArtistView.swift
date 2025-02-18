//
//  ArtistView.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/01.
//

import SwiftUI

struct ArtistView: View {
    
    @StateObject private var viewModel: ArtistViewModel

    init(viewModel: ArtistViewModel) {
        self._viewModel = StateObject(wrappedValue: viewModel)
    }
    
    var body: some View {
        content
    }
    
    @ViewBuilder
    private var content: some View {
        if let artist = viewModel.state.artist {
            GeometryReader { geometry in
                let width = geometry.size.width
                ScrollView {
                    VStack(spacing: 24) {
                        ArtistThumbnail(artist: artist)
                        
                        VStack {
                            SectionTitle(width: width, title: "노래") {
                                ChartList(title: "노래", tracks: artist.tracks)
                                    .logTransition(identifier: .trackList, componentId: .sectionTitle(category: "노래"))
                            }
                            
                            VStack(spacing: 12) {
                                ForEach(artist.tracks, id: \.id) { track in
                                    TrackRowB(viewModel: .init(track: track, eventLogger: MiniVibeApp.eventLogger))
                                }
                                .frame(width: width * .sectionRatio)
                            }
                            .padding(.horizontal, width * .paddingRatio)
                        }
                        
                        ArtistSection(width: width,
                                      sectionTitle: "비슷한 아티스트")
                        
                        PlayListSection(width: width,
                                        sizeRatio: .thumbnailRatio,
                                        title: "관련 플레이리스트",
                                        playlists: []) {
                            ThumbnailList(info: .playlist(data: []),
                                          navigationTitle: "관련 플레이리스트")
                                .logTransition(identifier: .playlists(id: 0),
                                               componentId: .sectionTitle(category: "관련 플레이리스트"))
                        }
                    }
                }
                .sheet(isPresented: $viewModel.state.isOpenMenu) {
                    ArtistMenu(artist: artist)
                        .logTransition(identifier: .artistMenu(id: artist.id),
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
                    viewModel.send(.appear)
                }
        }
    }
    
    var trailingBarButtons: some View {
        HStack(spacing: 10) {
            Button {
                viewModel.send(.like)
            } label: {  Image(systemName: "heart") }
            
            Button {
                viewModel.send(.showArtistMenu)
            } label: { Image(systemName: "ellipsis")  }
        }
        .font(.system(size: 17))
        .foregroundColor(.primary)
    }
}

struct ArtistView_Previews: PreviewProvider {
    static var previews: some View {
        NavigationView {
            ArtistView(viewModel: .init(id: 3))
        }
    }
}
