//
//  PlayListView.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/03.
//

import SwiftUI

struct PlayListView: View {
    init(id: Int) {
        self.id = id
    }
    
    @EnvironmentObject private var eventLogger: EventLogger
    @StateObject private var viewModel = PlaylistViewModel()
    private let id: Int
    
    var body: some View {
        if let playlist = viewModel.playlist {
            GeometryReader { geometry in
                let width: CGFloat = geometry.size.width
                if viewModel.isOpenArticle {
                    Article(isOpenArticle: $viewModel.isOpenArticle,
                            imageURL: playlist.imageUrl,
                            title: playlist.title,
                            subtitle: playlist.subTitle ?? "",
                            content: playlist.description ?? "")
                        .logTransition(eventLogger: eventLogger,
                                       identifier: .article,
                                       componentId: .playlistDescription)
                } else {
                    ScrollView {
                        VStack(spacing: 36) {
                            VStack {
                                PlaylistAlbumInfo(isOpenArticle: $viewModel.isOpenArticle,
                                                  imageURL: playlist.imageUrl ,
                                                  title: playlist.title,
                                                  subtitle: playlist.subTitle ?? "",
                                                  description: "",
                                                  article: playlist.description ?? "")
                                    .padding(.vertical, 10)
                                
                                LazyVGrid(
                                    columns: [.init(.fixed(geometry.size.width))],
                                    pinnedViews: [.sectionHeaders]
                                ) {
                                    Section(header: PlayAndShuffle(width: geometry.size.width)) {
                                        ForEach(playlist.tracks ?? [], id: \.id) { track in
                                            TrackRowC(track: track) {
                                                viewModel.send(.showTrackMenu(info: track))
                                            }
                                        }
                                    }
                                    .padding(.horizontal, geometry.size.width * .paddingRatio)
                                }
                            }
                            
                            ArtistSection(width: width,
                                          sectionTitle: "참여 아티스트")
                        }
                        .padding(.bottom, 70)
                    }
                    .navigationBarTitleDisplayMode(.inline)
                    .navigationBarItems(
                        trailing: trailingBarButtons
                    )
                    .fullScreenCover(isPresented: $viewModel.showSheet) {
                        switch viewModel.activeSheet {
                        case .playlist:
                            PlayListMenu(playlist: playlist)
                                .logTransition(eventLogger: eventLogger,
                                               identifier: .playlistMenu(id: playlist.id),
                                               componentId: .playlistMenuButton)
                        case let .track(info):
                            PlayerMenu(track: info)
                                .logTransition(eventLogger: eventLogger,
                                               identifier: .playerMenu(id: info.id),
                                               componentId: .trackMenuButton)
                        }
                    }
                }
            }
        } else {
            Color.clear
                .onAppear {
                    viewModel.send(.appear(playlistID: id))
                }
        }
    }
    
    var trailingBarButtons: some View {
        HStack(spacing: 10) {
            Button {
                
            } label: {
                Image(systemName: "heart")
            }
            
            Button {
                
            } label: {
                Image(systemName: "checkmark.circle")
            }
            
            Button {
                viewModel.send(.showPlaylistMenu)
            } label: {
                Image(systemName: "ellipsis")
            }
            .padding(.vertical)
        }
        .font(.system(size: 17))
        .foregroundColor(.black)
    }
    
}

struct PlayListView_Previews: PreviewProvider {
    static var previews: some View {
        NavigationView {
            PlayListView(id: 0)
        }
    }
}
