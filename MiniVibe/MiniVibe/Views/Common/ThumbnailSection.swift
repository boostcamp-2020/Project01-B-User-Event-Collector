//
//  ThumbnailSection.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/11/24.
//

import SwiftUI

struct ThumbnailSection<Dest: View>: View {
    let width: CGFloat
    let destination: Dest
    let title: String
    
    var body: some View {
        VStack(spacing: 8) {
            SectionTitle(width: width, destination: destination, title: title)
            
            ScrollView(.horizontal, showsIndicators: false) {
                HStack(spacing: width * .spacingRatio) {
                    ForEach(0..<10) { _ in
                        ThumbnailItem()
                            .frame(width: width * .thumbnailRatio)
                    }
                }
                .padding(.horizontal, width * .paddingRatio)
            }
        }
    }
}

struct ThumbnailSection_Previews: PreviewProvider {
    static var previews: some View {
        ThumbnailSection(width: 200, destination: Text("플레이리스트 목록"), title: "플레이리스트")
    }
}
