//
//  ThumbnailSection.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/11/24.
//

import SwiftUI

struct ThumbnailSection<Dest: View>: View {
    @State private var isOpenMenu = false
    let width: CGFloat
    let destination: Dest
    let title: String
    
    var body: some View {
        VStack(spacing: 8) {
            SectionTitle(width: width, destination: destination, title: title)
            
            ScrollView(.horizontal, showsIndicators: false) {
                HStack(spacing: width * .spacingRatio) {
                    ForEach(0..<10) { _ in
                        let title = "요즘 이 곡"
                        let subtitle = "VIBE"
                        NavigationLink(
                            destination: AlbumView(title: title, subtitle: subtitle),
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

struct ThumbnailSection_Previews: PreviewProvider {
    static var previews: some View {
        ThumbnailSection(width: 375, destination: Text("플레이리스트 목록"), title: "플레이리스트")
            .previewLayout(.fixed(width: 375, height: 300))
    }
}
