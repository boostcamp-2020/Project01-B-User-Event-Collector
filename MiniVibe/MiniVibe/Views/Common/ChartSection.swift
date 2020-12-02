//
//  ChartSection.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/11/23.
//

import SwiftUI

struct ChartSection: View {
    let width: CGFloat
    let title: String
    
    var body: some View {
        VStack {
            SectionTitle(width: width,
                         destination: ChartList(title: title),
                         title: title)
            
            ScrollView(.horizontal, showsIndicators: false) {
                LazyHGrid(rows: .init(repeating: .init(.flexible(minimum: 60)), count: 5)) {
                    ForEach(0..<25) { _ in
                        TrackRowA(title: "Dynamite", artist: "방탄소년단")
                    }
                    .frame(width: width * .sectionRatio)
                }
                .padding(.horizontal, width * .paddingRatio)
            }
        }
    }
}

struct ChartSection_Previews: PreviewProvider {
    static var previews: some View {
        ChartSection(width: 375, title: "최근 들은 노래")
            .previewLayout(.fixed(width: 375, height: 420))
    }
}
