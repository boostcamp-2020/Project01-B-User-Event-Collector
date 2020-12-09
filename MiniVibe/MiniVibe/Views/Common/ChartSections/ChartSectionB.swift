//
//  ChartSectionB.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/03.
//

import SwiftUI

struct ChartSectionB: View {
    let width: CGFloat
    let sectionTitle: String
    
    var body: some View {
        VStack {
            SectionTitle(width: width, title: sectionTitle) {
                ChartList(title: sectionTitle, tracks: [])
            }
            
            ScrollView(.horizontal, showsIndicators: false) {
                // 무조건 100개
                LazyHGrid(rows: .init(repeating: .init(.flexible(minimum: 60)), count: 5)) {
                    ForEach(0..<100) { index in
                        TrackRowE(order: 0, track: trackinfo)
                    }
                    .frame(width: width * .sectionRatio)
                }
                .padding(.horizontal, width * .paddingRatio)
            }
        }
    }
}

struct ChartSectionB_Previews: PreviewProvider {
    static var previews: some View {
        ChartSectionB(width: 375, sectionTitle: "국내 급상승 🔥")
            .previewLayout(.fixed(width: 375, height: 420))
    }
}
