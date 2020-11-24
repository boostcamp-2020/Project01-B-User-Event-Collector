//
//  MagazineSection.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/11/24.
//

import SwiftUI

struct MagazineSection: View {
    var body: some View {
        VStack {
            SectionTitle()
            GeometryReader { geometry in
                let width = geometry.size.width
                ScrollView(.horizontal, showsIndicators: false) {
                    HStack(spacing: width * 0.03) {
                        ForEach(0..<10) { _ in
                            MagazineItem()
                                .frame(width: width * 0.9)
                        }
                    }
                    .padding(.horizontal, width * 0.03)
                }
            }
        }
    }
}

struct MagazineSection_Previews: PreviewProvider {
    static var previews: some View {
        MagazineSection()
    }
}
