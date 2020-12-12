//
//  ChartSectionB.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/03.
//

import SwiftUI

struct ChartSectionB: View {
    @EnvironmentObject private var eventLogger: EventLogger
    let width: CGFloat
    let sectionTitle: String
    
    var body: some View {
        VStack {
            SectionTitle(width: width, title: sectionTitle) {
                ChartList(title: sectionTitle, tracks: [])
                    .logTransition(eventLogger: eventLogger,
                                   identifier: .chart(id: 0),
                                   componentId: .sectionTitle(category: sectionTitle))
            }
            
            ScrollView(.horizontal, showsIndicators: false) {
                // 무조건 100개
                LazyHGrid(rows: .init(repeating: .init(.flexible(minimum: 60)), count: 5)) {
                    ForEach(0..<100) { index in
                        TrackRowE(viewModel: .init(track: trackinfo), order: index)
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
