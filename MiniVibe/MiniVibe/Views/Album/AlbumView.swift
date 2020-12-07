//
//  AlbumPlaylistView.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/01.
//

import SwiftUI

struct AlbumView: View {
    enum ActiveSheet {
        case album
        case track
    }
    
    init(viewModel: AlbumViewModel) {
        self.viewModel = viewModel
    }
    
    @ObservedObject private var viewModel: AlbumViewModel
    @State private var activeSheet: ActiveSheet = .album
    @State private var showSheet = false
    @State private var isOpenArticle = false
    
    var body: some View {
        if let album = viewModel.album {
            GeometryReader { geometry in
                let width: CGFloat = geometry.size.width
                if isOpenArticle {
                    Article(isOpenArticle: $isOpenArticle,
                            imageURL: album.imageUrl,
                            title: album.title,
                            subtitle: album.artist.name,
                            content: album.description)
                } else {
                    
                    ScrollView {
                        VStack(spacing: 36) {
                            VStack {
                                PlaylistAlbumInfo(album: album,
                                                  isOpenArticle: $isOpenArticle)
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
                                                    activeSheet = .track
                                                    showSheet = true
                                                }
                                            }
                                        }
                                        .padding(.horizontal, geometry.size.width * .paddingRatio)
                                    }
                                }
                            }
                            
                            AlbumSection(
                                width: width,
                                destination: ThumbnailGridView(title: "아티스트의 다른 앨범"),
                                title: "아티스트의 다른 앨범", albums: []
                            )
                            
                            ArtistSection(width: width,
                                          sectionTitle: "비슷한 아티스트")
                            
                            PlayListSection(
                                width: width,
                                title: "관련 플레이리스트",
                                destination: ThumbnailList(info: .playlist(data: []),
                                                           navigationTitle: "관련 플레이리스트"),
                                playlists: []
                            )
                        }
                        .padding(.bottom, 70)
                    }
                    .navigationBarTitleDisplayMode(.inline)
                    .navigationBarItems(
                        trailing: trailingBarButtons
                    )
                    .fullScreenCover(isPresented: $showSheet) {
                        if activeSheet == .album {
                            AlbumMenu(title: album.title, subtitle: album.artist.name)
                        } else {
                            PlayerMenu(title: album.title, subtitle: album.artist.name)
                        }
                    }
                }
            }
        } else {
            Color.clear
                .onAppear(perform: viewModel.load)
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
                activeSheet = .album
                showSheet = true
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
