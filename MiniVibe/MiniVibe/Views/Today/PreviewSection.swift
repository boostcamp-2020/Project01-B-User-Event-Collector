//
//  PreviewSection.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/11/24.
//

import SwiftUI

struct PreviewSection: View {
    let width: CGFloat
    var body: some View {
        ScrollView(.horizontal, showsIndicators: false) {
            HStack {
                MockPreviewItem.item0
                    .frame(width: width * .sectionRatio)
                
                MockPreviewItem.item1
                    .frame(width: width * .sectionRatio)
                
                MockPreviewItem.item2
                    .frame(width: width * .sectionRatio)

            }
            .padding(.horizontal, width * .paddingRatio)
        }
    }
}

struct PreviewSection_Previews: PreviewProvider {
    static var previews: some View {
            PreviewSection(width: 375)
                .previewLayout(.fixed(width: 375, height: 250))
    }
}
