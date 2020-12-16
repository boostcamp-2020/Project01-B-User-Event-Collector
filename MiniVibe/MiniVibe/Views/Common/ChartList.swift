//
//  ChartList.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/11/25.
//

import SwiftUI

struct ChartList: View {
    let title: String
    let tracks: [TrackInfo]
    
    var body: some View {
        GeometryReader { geometry in
            ScrollView {
                LazyVGrid(
                    columns: [.init(.fixed(geometry.size.width))],
                    spacing: 20,
                    pinnedViews: [.sectionHeaders]
                ) {
                    Section(header: PlayAndShuffle(width: geometry.size.width)) {
                        ForEach(tracks.indices) { index in
                            TrackRowA(viewModel: .init(track: tracks[index],
                                                       eventLogger: MiniVibeApp.eventLogger),
                                      order: index + 1)
                        }
                    }
                    .padding(.horizontal, geometry.size.width * .paddingRatio)
                }
                .navigationTitle(title)
                .navigationBarTitleDisplayMode(.inline)
                .padding(.bottom, 70)
            }
        }
    }
}

struct ChartList_Previews: PreviewProvider {
    static var previews: some View {
        NavigationView {
            ChartList(title: "최근 들은 노래", tracks: [])
        }
    }
}
