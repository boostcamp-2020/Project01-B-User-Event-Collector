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
            SectionTitle(width: width, destination: MagazineList(), title: title)
            ScrollView(.horizontal, showsIndicators: false) {
                HStack(spacing: width * 0.02) {
                    ForEach(0..<10) { _ in
                        MagazineItem()
                            .frame(width: width * 0.92)
                    }
                }
                .padding(.horizontal, width * 0.04)
            }
        }
    }
}

struct MagazineSection_Previews: PreviewProvider {
    static var previews: some View {
        MagazineSection(width: 200, title: "매거진")
    }
}
