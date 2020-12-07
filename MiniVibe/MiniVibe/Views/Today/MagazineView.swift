//
//  MagazineView.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/07.
//

import SwiftUI

struct MagazineView: View {
    var body: some View {
        GeometryReader { geometry in
            let width = geometry.size.width
            let img = "https://music-phinf.pstatic.net/20201207_49/1607303728781HTub7_JPEG/0-%B4%EB%C7%A5%C0%CC%B9%CC%C1%F6_1.jpg?type=w720"
            ScrollView {
                LazyVGrid(
                    columns: [.init(.fixed(geometry.size.width))],
                    pinnedViews: [.sectionHeaders]
                ) {
                    MagazineItem(magazine: Magazine(id: 0,
                                                    title: "머라이어캐리",
                                                    imageUrl: img,
                                                    date: "2020-11-11",
                                                    category: "GENRE"))
                    Section(header: PlayAndShuffle(width: geometry.size.width)) {
                        Text(ArticleExample.content)
                            .padding(.horizontal, width * .paddingRatio)
                        ForEach(0..<10) { index in
                            TrackRowE(order: index + 1, title: "아", artist: "되나?")
                        }
                    }
                    .padding(.horizontal, geometry.size.width * .paddingRatio)
                }
            }
        }
    }
}

struct MagazineView_Previews: PreviewProvider {
    static var previews: some View {
        MagazineView()
    }
}
