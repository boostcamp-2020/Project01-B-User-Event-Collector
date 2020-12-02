//
//  TrackRowB.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/02.
//

import SwiftUI

struct TrackRowB: View {
    let title: String
    let artist: String

    var body: some View {
        HStack {
            Image("album")
                .trackRowImageConfigure()
            
            VStack(alignment: .leading, spacing: 4) {
                Text(title)
                    .font(.title3)
                Text(artist)
                    .font(.subheadline)
                    .foregroundColor(.secondary)
            }
            
            Spacer()
        }
        .padding(.vertical, 8)
    }
}

struct TrackRowB_Previews: PreviewProvider {
    static var previews: some View {
        TrackRowB(title: "작은 방 (Feat.아이유)", artist: "스윗소로우")
            .previewLayout(.fixed(width: 375, height: 80))
    }
}
