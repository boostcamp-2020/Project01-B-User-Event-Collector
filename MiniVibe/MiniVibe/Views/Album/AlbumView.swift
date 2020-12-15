//
//  AlbumPlaylistView.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/01.
//

import SwiftUI

struct AlbumView: View {
    init(viewModel: AlbumViewModel) {
        self._viewModel = StateObject(wrappedValue: viewModel)
    }
    
    @StateObject private var viewModel: AlbumViewModel
    
    var body: some View {
        content
    }
    
    @ViewBuilder
    private var content: some View {
        if let album = viewModel.state.album {
            GeometryReader { geometry in
                let width: CGFloat = geometry.size.width
                if viewModel.state.isOpenArticle {
                    Article(isOpenArticle: $viewModel.state.isOpenArticle,
                            imageURL: album.imageUrl,
                            title: album.title,
                            subtitle: album.artist.name,
                            content: album.description)
                        .logTransition(identifier: .article,
                                       componentId: .albumDescription)
                } else {
                    ScrollView {
                        VStack(spacing: 36) {
                            VStack {
                                PlaylistAlbumInfo(isOpenArticle: $viewModel.state.isOpenArticle,
                                                  imageURL: album.imageUrl,
                                                  title: album.title,
                                                  subtitle: album.artist.name,
                                                  description: album.releaseDate,
                                                  article: album.description)
                                    .padding(.vertical, 10)
                                
                                if let tracks = album.tracks {
                                    LazyVGrid(
                                        columns: [.init(.fixed(geometry.size.width))],
                                        pinnedViews: [.sectionHeaders]
                                    ) {
                                        Section(header: PlayAndShuffle(width: geometry.size.width)) {
                                            ForEach(tracks, id: \.id) { track in
                                                TrackRowD(viewModel:
                                                            .init(track: track,
                                                                  eventLogger: MiniVibeApp.eventLogger),
                                                          order: 1) {
                                                    viewModel.send(.showTrackMenu(info: $0))
                                                }
                                            }
                                        }
                                        .padding(.horizontal, geometry.size.width * .paddingRatio)
                                    }
                                }
                            }
                            
                            AlbumSection(width: width, title: "아티스트의 다른 앨범", albums: []) {
                                ThumbnailGridView(title: "아티스트의 다른 앨범", album: [])
                            }
                            
                            ArtistSection(width: width,
                                          sectionTitle: "비슷한 아티스트")
                            
                            PlayListSection(
                                width: width,
                                title: "관련 플레이리스트",
                                playlists: []
                            ) {
                                ThumbnailList(info: .playlist(data: []),
                                              navigationTitle: "관련 플레이리스트")
                            }
                        }
                        .padding(.bottom, 70)
                    }
                    .navigationBarTitleDisplayMode(.inline)
                    .navigationBarItems(
                        trailing: trailingBarButtons
                    )
                    .fullScreenCover(isPresented: $viewModel.state.showSheet) {
                        switch viewModel.state.activeSheet {
                        case .album:
                            AlbumMenu(viewModel: viewModel)
                                .logTransition(identifier: .albumMenu(id: album.id),
                                               componentId: .albumMenuButton)
                        case let .track(info):
                            PlayerMenu(viewModel: info)
                                .logTransition(identifier: .playerMenu(id: info.state.track.id),
                                               componentId: .trackMenuButton)
                        }
                    }
                }
            }
        } else {
            Color.clear
                .onAppear {
                    viewModel.send(.appear)
                }
        }
    }
    
    private var trailingBarButtons: some View {
        HStack(spacing: 10) {
            Button {
                viewModel.send(.like)
            } label: {
                Image(systemName: "heart")
            }
            
            Button {
                
            } label: {
                Image(systemName: "checkmark.circle")
            }
            
            Button {
                viewModel.send(.showAlbumMenu)
            } label: {
                Image(systemName: "ellipsis")
            }
            .padding(.vertical)
        }
        .font(.system(size: 17))
        .foregroundColor(.primary)
    }
    
}

struct AlbumPlaylistView_Previews: PreviewProvider {
    static var previews: some View {
        NavigationView {
            AlbumView(viewModel: .init(id: 11, eventLogger: MiniVibeApp.eventLogger))
        }
    }
}
