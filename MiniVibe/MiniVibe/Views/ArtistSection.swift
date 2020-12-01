//
//  ArtistSection.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/01.
//

import SwiftUI

struct ArtistSection: View {
    let sectionTitle: String
    
    var body: some View {
        VStack(alignment: .leading) {
            Text(sectionTitle)
                .font(.system(size: 16.5, weight: .bold))
            ScrollView(.horizontal,
                       showsIndicators: false) {
                LazyHStack(spacing: 16) {
                    ForEach(0..<10) { _ in
                        ArtistItem()
                    }
                }
            }
        }
    }
}

struct ArtistSection_Previews: PreviewProvider {
    static var previews: some View {
        ArtistSection(sectionTitle: "비슷한 아티스트")
            .previewLayout(.fixed(width: 400, height: 200))
    }
}
