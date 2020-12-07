//
//  ArtistView.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/01.
//

import SwiftUI

struct ArtistView: View {
    
    var body: some View {
        GeometryReader { geometry in
            let width = geometry.size.width
            ScrollView {
                VStack(spacing: 24) {
                    ArtistThumbnail()
                    
                    VStack {
                        SectionTitle(width: width, title: "노래") {
                            ChartList(title: "노래")
                        }
                        
                        VStack(spacing: 12) {
                            ForEach(0..<5) { _ in
                                TrackRowB(track: .init(id: 0, title: "Dynamite", lyrics: "", albumId: 0, album: .init(title: "", imageUrl: ""), artist: .init(id: 0, name: "방탄소년단")))
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
                    }
                    
                    ArtistSection(width: width,
                                  sectionTitle: "비슷한 아티스트")
                    
                    PlayListSection(width: width,
                                    title: "관련 플레이리스트",
                                    playlists: []) {
                        ThumbnailList(info: .playlist(data: []),
                                      navigationTitle: "관련 플레이리스트")
                    }
                }
            }
            .navigationTitle("방탄소년단")
            .navigationBarItems(trailing: trailingBarButtons)
            .navigationBarTitleDisplayMode(.inline)
            .padding(.bottom, 70)
        }
    }
    
    var trailingBarButtons: some View {
        HStack(spacing: 10) {
            Button {
                
            } label: {  Image(systemName: "heart") }
            
            Button {
                
            } label: { Image(systemName: "ellipsis")  }
        }
        .font(.system(size: 17))
        .foregroundColor(.black)
    }
}

struct ArtistView_Previews: PreviewProvider {
    static var previews: some View {
        NavigationView {
            ArtistView()
        }
    }
}
