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
            SectionTitle(width: width,
                         destination: ThumbnailList(title: "VIBE 추천 플레이리스트"),
                         title: title)
            
            ScrollView(.horizontal, showsIndicators: false) {
                LazyHStack(spacing: width * .spacingRatio) {
                    ForEach(0..<5) { _ in
                        RecommandedPlayListItem()
                            .frame(width: width * .sectionRatio)
                    }
                }
                .padding(.horizontal, width * .paddingRatio)
            }
        }
    }
}

struct RecommandedPlayListSection_Previews: PreviewProvider {
    static var previews: some View {
        RecommandedPlayListSection(width: 200, title: "추천 플레이리스트")
    }
}
