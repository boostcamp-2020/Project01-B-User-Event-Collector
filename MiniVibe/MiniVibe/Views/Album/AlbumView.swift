//
//  AlbumPlaylistView.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/01.
//

import SwiftUI

struct AlbumView: View {
    init(id: Int) {
        self.id = id
    }
    
    @EnvironmentObject private var eventLogger: EventLogger
    @StateObject private var viewModel = AlbumViewModel()
    private let id: Int
    
    var body: some View {
        content
            .logTransition(eventLogger: eventLogger, identifier: .album(id: id))
    }
    
    @ViewBuilder
    private var content: some View {
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
                                PlaylistAlbumInfo(isOpenArticle: $viewModel.isOpenArticle,
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
                                       imageURL: album.imageUrl)
                        }
                    }
                }
            }
        } else {
            Color.clear
                .onAppear {
                    viewModel.send(.appear(albumID: id))
                }
        }
    }
    
    private var trailingBarButtons: some View {
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
            AlbumView(id: 11)
        }
    }
}
