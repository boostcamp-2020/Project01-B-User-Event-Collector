//
//  AlbumPlaylistView.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/01.
//

import SwiftUI

struct AlbumView: View {
    init(viewModel: AlbumViewModel) {
        self.viewModel = viewModel
    }
    
    @ObservedObject private var viewModel: AlbumViewModel
    
    var body: some View {
        if let album = viewModel.album {
            GeometryReader { geometry in
                let width: CGFloat = geometry.size.width
                if viewModel.isOpenArticle {
                    Article(isOpenArticle: $viewModel.isOpenArticle,
                            imageURL: album.imageUrl,
                            title: album.title,
                            subtitle: album.artist.name,
                            content: album.description)
                } else {
                    
                    ScrollView {
                        VStack(spacing: 36) {
                            VStack {
                                PlaylistAlbumInfo(album: album,
                                                  isOpenArticle: $viewModel.isOpenArticle)
                                    .padding(.vertical, 10)
                                
                                if let tracks = album.tracks {
                                    LazyVGrid(
                                        columns: [.init(.fixed(geometry.size.width))],
                                        pinnedViews: [.sectionHeaders]
                                    ) {
                                        Section(header: PlayAndShuffle(width: geometry.size.width)) {
                                            ForEach(tracks, id: \.id) { track in
                                                TrackRowD(order: 1,
                                                          title: track.title,
                                                          artist: album.artist.name
                                                ) {
                                                    viewModel.send(.showTrackMenu(info: track))
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
                    .fullScreenCover(isPresented: $viewModel.showSheet) {
                        switch viewModel.activeSheet {
                        case .album:
                            AlbumMenu(album: album)
                        case let .track(info):
                            PlayerMenu(title: info.title,
                                       subtitle: album.artist.name,
                                       imageURL: album.imageUrl,
                                       id: album.id)
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
                viewModel.send(.showAlbumMenu)
            } label: {
                Image(systemName: "ellipsis")
            }
            .padding(.vertical)
        }
        .font(.system(size: 17))
        .foregroundColor(.black)
    }
    
}

struct AlbumPlaylistView_Previews: PreviewProvider {
    static var previews: some View {
        NavigationView {
            AlbumView(viewModel: .init(id: 11))
        }
    }
}
