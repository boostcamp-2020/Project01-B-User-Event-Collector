//
//  MagazineSection.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/11/24.
//

import SwiftUI

struct MagazineSection: View {
    let width: CGFloat
    let title: String
    
    var body: some View {
        VStack {
            SectionTitle(width: width, destination: ThumbnailList(title: "매거진"), title: title)
            
            ScrollView(.horizontal, showsIndicators: false) {
                HStack(spacing: width * .spacingRatio) {
                    ForEach(0..<10) { _ in
                        MagazineItem()
                            .frame(width: width * .sectionRatio)
                    }
                }
                .padding(.horizontal, width * .paddingRatio)
            }
        }
    }
}

struct MagazineSection_Previews: PreviewProvider {
    static var previews: some View {
        MagazineSection(width: 200, title: "매거진")
    }
}
