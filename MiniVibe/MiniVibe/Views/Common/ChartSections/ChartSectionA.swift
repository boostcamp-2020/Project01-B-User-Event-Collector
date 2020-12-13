//
//  ChartSectionA.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/11/23.
//

import SwiftUI

struct ChartSectionA: View {
    @EnvironmentObject private var nowPlaying: NowPlaying
    let width: CGFloat
    let title: String
    let tracks: [TrackInfo]
    
    var body: some View {
        VStack {
            SectionTitle(width: width, title: title) {
                ChartList(title: title, tracks: tracks)
                    .logTransition(identifier: .chart(id: 100),
                                   componentId: .sectionTitle(category: title))
            }
            
            ScrollView(.horizontal, showsIndicators: false) {
                LazyHGrid(rows: .init(repeating: .init(.flexible(minimum: 60)), count: 5)) {
                    ForEach(tracks, id: \.id) { track in
                        TrackRowB(viewModel: .init(track: track, eventLogger: MiniVibeApp.eventLogger))
                    }
                    .frame(width: width * .sectionRatio)
                }
                .padding(.horizontal, width * .paddingRatio)
            }
        }
    }
}

struct ChartSectionA_Previews: PreviewProvider {
    static var previews: some View {
        ChartSectionA(width: 375, title: "최근 들은 노래", tracks: [])
            .previewLayout(.fixed(width: 375, height: 420))
    }
}
