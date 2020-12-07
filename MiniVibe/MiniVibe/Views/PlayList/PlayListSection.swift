//
//  PlayListSection.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/03.
//

import SwiftUI

struct PlayListSection<D: View>: View {
    @State private var isOpenMenu = false
    let width: CGFloat
    let title: String
    let destination: D
    let playlists: [Playlist]
    
    var body: some View {
        VStack(spacing: 8) {
            SectionTitle(width: width,
                         destination: destination,
                         title: title)
            
            ScrollView(.horizontal, showsIndicators: false) {
                HStack(spacing: width * .spacingRatio) {
                    ForEach(playlists, id: \.id) { playlist in
                        NavigationLink(
                            // id로 playlsitview 한테 넘길거고
                            destination: PlayListView(title: playlist.title,
                                                      subtitle: playlist.subTitle),
                            label: {
                                ThumbnailItem(title: playlist.title,
                                              subtitle: playlist.subTitle,
                                              imageURL: playlist.imageUrl)
                                    .frame(width: width * .thumbnailRatio)
                            }
                        )
                    }
                    .foregroundColor(.black)
                }
                .padding(.horizontal, width * .paddingRatio)
            }
        }
    }
}

struct PlayListSection_Previews: PreviewProvider {
    static var previews: some View {
        PlayListSection(width: 375, title: "플레이리스트", destination: Text("플레이리스트 더보기"), playlists: [])
            .previewLayout(.fixed(width: 375, height: 300))
    }
}
