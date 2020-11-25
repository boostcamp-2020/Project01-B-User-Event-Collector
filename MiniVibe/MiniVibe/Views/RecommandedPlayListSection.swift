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
            SectionTitle(width: width, destination: Text("추천 플레이리스트"), title: title)
            ScrollView(.horizontal, showsIndicators: false) {
                LazyHStack(spacing: width * 0.02) {
                    ForEach(0..<5) { _ in
                        RecommandedPlayListItem()
                            .frame(width: width * 0.92)
                    }
                }
                .padding(.horizontal, width * 0.04)
            }
        }
    }
}

struct RecommandedPlayListSection_Previews: PreviewProvider {
    static var previews: some View {
        RecommandedPlayListSection(width: 200, title: "추천 플레이리스트")
    }
}
