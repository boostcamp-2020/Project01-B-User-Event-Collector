//
//  ChartSection.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/11/23.
//

import SwiftUI

struct ChartSection: View {
    let width: CGFloat
    
    var body: some View {
        VStack {
            SectionTitle(width: width)
            ScrollView(.horizontal, showsIndicators: false) {
                LazyHGrid(rows: .init(repeating: .init(.flexible(minimum: 60)), count: 5)) {
                    ForEach(0..<25) { _ in
                        TrackRow()
                    }
                    .frame(width: width * 0.9)
                }
                .padding(.horizontal, width * 0.02)
            }
        }
    }
}

struct ChartSection_Previews: PreviewProvider {
    static var previews: some View {
        GeometryReader { geometry in
            ChartSection(width: geometry.size.width)
        }
    }
}
