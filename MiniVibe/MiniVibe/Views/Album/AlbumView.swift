//
//  AlbumPlaylistView.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/01.
//

import SwiftUI

enum ActiveSheet {
    case playlist
    case track
}

struct AlbumView: View {
    @State private var activeSheet: ActiveSheet = .playlist
    @State private var showSheet = false
    
    let title: String
    let subtitle: String
    
    var body: some View {
        GeometryReader { geometry in
            let width: CGFloat = geometry.size.width
            
            ScrollView {
                VStack(spacing: 36) {
                    VStack {
                        PlaylistAlbumInfo(title: title, subtitle: subtitle)
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
                    
                    ThumbnailSection(
                        width: width,
                        destination: ThumbnailGridView(title: "아티스트의 다른 앨범"),
                        title: "아티스트의 다른 앨범"
                    )
                    
                    ArtistSection(width: width,
                                  sectionTitle: "비슷한 아티스트")
                    
                    ThumbnailSection(
                        width: width,
                        destination: ThumbnailList(title: "관련 플레이리스트", info: .playlist),
                        title: "관련 플레이리스트"
                    )
                }
            }
            .padding(.bottom, 70)
            .navigationBarTitleDisplayMode(.inline)
            .navigationBarItems(
                trailing: trailingBarButtons
            )
            .fullScreenCover(isPresented: $showSheet) {
                if activeSheet == .playlist {
                    AlbumMenu(title: title, subtitle: subtitle)
                } else {
                    PlayerMenu(title: "Among US", subtitle: "정혜일")
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
                activeSheet = .playlist
                if activeSheet == .playlist {
                    showSheet = true
                }
            } label: {
                Image(systemName: "ellipsis")
            }
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
