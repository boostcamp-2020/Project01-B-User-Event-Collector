//
//  StationSection.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/11/24.
//

import SwiftUI

struct StationSection: View {
    let width: CGFloat
    let title: String
    
    var body: some View {
        VStack {
            SectionTitle(width: width, destination: Text("스테이션 더보기"), title: title)
            ScrollView(.horizontal, showsIndicators: false) {
                HStack(spacing: width * 0.02) {
                    ForEach(0..<10) { _ in
                        StationItem()
                            .frame(width: width * 0.45)
                    }
                    
                }
                .padding(.horizontal, width * 0.02)
            }
        }
    }
}

struct StationSection_Previews: PreviewProvider {
    static var previews: some View {
        StationSection(width: 200, title: "스테이션")
    }
}
