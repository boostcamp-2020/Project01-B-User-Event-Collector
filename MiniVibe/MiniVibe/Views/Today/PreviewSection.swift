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
        GeometryReader { geometry in
            PreviewSection(width: geometry.size.width)
        }
    }
}
