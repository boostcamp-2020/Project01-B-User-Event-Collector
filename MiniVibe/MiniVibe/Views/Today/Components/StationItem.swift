//
//  StationItem.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/11/24.
//

import SwiftUI
import KingfisherSwiftUI

struct StationItem: View {
    let imageUrl: String
 
    var body: some View {
        ZStack(alignment: .bottomTrailing) {
            KFImage(URL(string: imageUrl))
                .resizable()
                .aspectRatio(contentMode: .fit)
            
            Image(systemName: "play.circle.fill")
                .font(.system(size: 20))
                .foregroundColor(Color.white.opacity(0.8))
                .padding(10)
        }
    }
}

struct StationItem_Previews: PreviewProvider {
    static var previews: some View {
        StationItem(imageUrl: "https://music-phinf.pstatic.net/20181204_203/1543918901105PmOS5_PNG/mood_11_Party.png?type=f360")
            .previewLayout(.fixed(width: 375, height: 375))
    }
}

struct Station: Hashable {
    let imageUrl: String
}
