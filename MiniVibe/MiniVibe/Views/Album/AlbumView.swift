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
    
    @State private var activeSheet: ActiveSheet = .album
    @State private var showSheet = false
    @State private var isOpenArticle = false
    let title: String
    let subtitle: String
    
    var body: some View {
        GeometryReader { geometry in
            let width: CGFloat = geometry.size.width
            if isOpenArticle {
                Article(isOpenArticle: $isOpenArticle,
                        title: title,
                        subtitle: subtitle)
            } else {
                ScrollView {
                    VStack(spacing: 36) {
                        VStack {
                            PlaylistAlbumInfo(title: title,
                                              subtitle: subtitle,
                                              isOpenArticle: $isOpenArticle)
                                .padding(.vertical, 10)
                            
                            LazyVGrid(
                                columns: [.init(.fixed(geometry.size.width))],
                                pinnedViews: [.sectionHeaders]
                            ) {
                                Section(header: PlayAndShuffle(width: geometry.size.width)) {
                                    ForEach(0..<7) { index in
                                        TrackRowD(order: index + 1,
                                                  title: "Dynamite",
                                                  artist: "방탄소년단"
                                        ) {
                                            activeSheet = .track
                                            showSheet = true
                                        }
                                    }
                                }
                                .padding(.horizontal, geometry.size.width * .paddingRatio)
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
                            destination: ThumbnailList(title: "관련 플레이리스트",
                                                       info: .playlist),
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
                        AlbumMenu(title: title, subtitle: subtitle)
                    } else {
                        PlayerMenu(title: title, subtitle: subtitle)
                    }
                }
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
            AlbumView(title: "여긴 앨범 이름이야", subtitle: "여긴 가수고")
        }
    }
}
