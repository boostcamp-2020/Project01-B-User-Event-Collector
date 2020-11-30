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
                ForEach(0..<5) { _ in
                    PreviewItem()
                        .frame(width: width * .sectionRatio)
                }
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
