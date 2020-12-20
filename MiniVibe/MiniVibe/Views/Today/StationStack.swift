//
//  StationStack.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/11/25.
//

import SwiftUI

struct StationStack: View {
    let width: CGFloat
    let items: [Station] = MockStationItem.stations
    var body: some View {
        ScrollView(.horizontal, showsIndicators: false) {
            HStack(spacing: width * .spacingRatio) {
                ForEach(items, id: \.self) { item in
                    StationItem(imageUrl: item.imageUrl)
                        .frame(width: width * .thumbnailRatio)
                }
            }
            .padding(.horizontal, width * .paddingRatio)
        }
    }
}

struct StationStack_Previews: PreviewProvider {
    static var previews: some View {
        StationStack(width: 375)
            .previewLayout(.fixed(width: 375, height: 200))
    }
}
