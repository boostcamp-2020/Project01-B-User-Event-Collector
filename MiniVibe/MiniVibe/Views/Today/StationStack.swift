//
//  StationStack.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/11/25.
//

import SwiftUI

struct MockStationItem {
    static let station0 = Station(imageUrl: "https://music-phinf.pstatic.net/20181204_203/1543918901105PmOS5_PNG/mood_11_Party.png?type=f360")
    static let station1 = Station(imageUrl: "https://music-phinf.pstatic.net/20181204_251/1543918889382acDmF_PNG/mood_9_Wokrout.png?type=f360")
    static let station2 = Station(imageUrl: "https://music-phinf.pstatic.net/20181204_193/1543918895074bt55B_PNG/mood_10_Relax.png?type=f360")
    static let station3 = Station(imageUrl: "https://music-phinf.pstatic.net/20181204_1/1543917558419bLOt5_PNG/mood_2_Hip.png?type=f360")
}

struct StationStack: View {
    let width: CGFloat
    let items: [Station] = [.init(imageUrl: "https://music-phinf.pstatic.net/20181204_203/1543918901105PmOS5_PNG/mood_11_Party.png?type=f360"),
                            .init(imageUrl: "https://music-phinf.pstatic.net/20181204_251/1543918889382acDmF_PNG/mood_9_Wokrout.png?type=f360"),
                            .init(imageUrl: "https://music-phinf.pstatic.net/20181204_193/1543918895074bt55B_PNG/mood_10_Relax.png?type=f360"),
                            .init(imageUrl: "https://music-phinf.pstatic.net/20181204_1/1543917558419bLOt5_PNG/mood_2_Hip.png?type=f360")]
    
    var body: some View {
        ScrollView(.horizontal, showsIndicators: false) {
            HStack(spacing: width * .spacingRatio) {
                ForEach(items, id: \.self) { item in
                    StationItem(imageUrl: item.imageUrl)
                        .frame(width: width * .thumbnailRatio)
                }
//                ForEach(0..<6) { _ in
//                    StationItem()
//                        .frame(width: width * .thumbnailRatio)
//                }
                
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
