//
//  ChartSectionB.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/03.
//

import SwiftUI

struct ChartSectionB: View {
    let width: CGFloat
    let title: String
    let tracks: [TrackInfo]
    
    var body: some View {
        VStack {
            SectionTitle(width: width, title: title) {
                ChartList(title: title, tracks: tracks)
                    .logTransition(identifier: .chart(id: 0),
                                   componentId: .sectionTitle(category: title))
            }
            
            ScrollView(.horizontal, showsIndicators: false) {
                LazyHGrid(rows: .init(repeating: .init(.flexible(minimum: 60)), count: 5)) {
                    ForEach(tracks, id: \.id) { track in
                        TrackRowE(viewModel: .init(track: track,
                                                   eventLogger: MiniVibeApp.eventLogger),
                                  order: 1 + (tracks.firstIndex(of: track) ?? 1))
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
        ChartSectionB(width: 375, title: "국내 급상승 🔥", tracks: [trackinfo])
            .previewLayout(.fixed(width: 375, height: 420))
            .previewInAllColorSchemes
    }
}
