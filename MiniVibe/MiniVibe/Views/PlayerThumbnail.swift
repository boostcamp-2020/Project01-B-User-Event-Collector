//
//  PlayerThumbnail.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/11/30.
//

import SwiftUI

struct PlayerThumbnail: View {
    let image: String
    let lyrics: String
    
    var body: some View {
        VStack {
            Image(image)
                .resizable()
                .aspectRatio(1, contentMode: .fit)
            Text(lyrics)
                .font(.system(size: 12))
                .foregroundColor(.secondary)
                .lineLimit(2)
        }
        .padding(.vertical, 24)
    }
}

struct PlayerThumbnail_Previews: PreviewProvider {
    static var previews: some View {
        PlayerThumbnail(image: "playListThumbnail",
                        lyrics: "가사가사가사가사\n가사가사\n가사\n가사가사가사가사")
    }
}
