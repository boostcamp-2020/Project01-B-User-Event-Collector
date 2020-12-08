//
//  ArtistSection.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/01.
//

import SwiftUI

struct ArtistSection: View {
    let width: CGFloat
    let sectionTitle: String
    
    var body: some View {
        VStack(alignment: .leading) {
            Text(sectionTitle)
                .font(.system(size: 16.5, weight: .bold))
                .padding(.horizontal, width * .paddingRatio)
            ScrollView(.horizontal,
                       showsIndicators: false) {
                HStack(spacing: 16) {
                    ForEach(0..<10) { _ in
                        NavigationLink(
                            destination: ArtistView(id: 3),
                            label: {
                                ArtistItem()
                            })
                    }
                }
                .padding(.horizontal, width * .paddingRatio)
            }
        }
    }
}

struct ArtistSection_Previews: PreviewProvider {
    static var previews: some View {
        ArtistSection(width: 350, sectionTitle: "비슷한 아티스트")
            .previewLayout(.fixed(width: 400, height: 200))
    }
}
