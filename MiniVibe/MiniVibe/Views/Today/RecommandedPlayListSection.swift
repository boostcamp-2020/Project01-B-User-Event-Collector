//
//  RecommandedPlayListSection.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/11/24.
//

import SwiftUI

struct RecommandedPlayListSection: View {
    let width: CGFloat
    let title: String
    
    var body: some View {
        VStack {
            SectionTitle(width: width, title: title) {
                ThumbnailList(info: .playlist(data: []), navigationTitle: title)
                    .logTransition(identifier: .playlists(id: 5),
                                   componentId: .sectionTitle(category: title))
            }
            
            ScrollView(.horizontal, showsIndicators: false) {
                LazyHStack(spacing: width * .spacingRatio) {
                    ForEach(0..<5) { _ in
                        NavigationLink(destination:
                                        AlbumView(viewModel: .init(id: 11))
                                        .logTransition(identifier: .album(id: 11),
                                                       componentId: .playlistItem(section: title))
                        ) {
                            RecommandedPlayListItem()
                                .frame(width: width * .sectionRatio)
                        }
                    }
                    .foregroundColor(.black)
                }
                .padding(.horizontal, width * .paddingRatio)
            }
        }
    }
}

struct RecommandedPlayListSection_Previews: PreviewProvider {
    static var previews: some View {
        RecommandedPlayListSection(width: 375, title: "추천 플레이리스트")
            .previewLayout(.fixed(width: 375, height: 450))
    }
}
