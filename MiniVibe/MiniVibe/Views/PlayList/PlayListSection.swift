//
//  PlayListSection.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/03.
//

import SwiftUI

struct PlayListSection: View {
    @State private var isOpenMenu = false
    let width: CGFloat
    let title: String
    
    var body: some View {
        VStack(spacing: 8) {
            SectionTitle(width: width,
                         destination: ThumbnailList(title: title,
                                                    info: .playlist),
                         title: title)
            
            ScrollView(.horizontal, showsIndicators: false) {
                HStack(spacing: width * .spacingRatio) {
                    ForEach(0..<10) { _ in
                        let title = "요즘 이 곡"
                        let subtitle = "VIBE"
                        NavigationLink(
                            destination: PlayListView(title: title, subtitle: subtitle),
                            label: {
                                ThumbnailItem(title: title, subtitle: subtitle)
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
        PlayListSection(width: 375, title: "플레이리스트")
            .previewLayout(.fixed(width: 375, height: 300))
    }
}
