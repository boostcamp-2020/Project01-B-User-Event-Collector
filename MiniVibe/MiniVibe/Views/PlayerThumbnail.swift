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
    @Binding var isPlaying: Bool
    
    var body: some View {
        VStack {
            Image(image)
                .resizable()
                .aspectRatio(1, contentMode: .fit)
                .scaleEffect(isPlaying ? 1 : 0.9)
            Text(lyrics)
                .font(.system(size: 14))
                .foregroundColor(.secondary)
                .lineLimit(2)
                .opacity(isPlaying ? 1 : 0)
        }
        .animation(.easeInOut)
    }
}

struct PlayerThumbnail_Previews: PreviewProvider {
    static var previews: some View {
        PlayerThumbnail(image: "playListThumbnail",
                        lyrics: "가사가사가사가사\n가사가사\n가사\n가사가사가사가사", isPlaying: .constant(false))
    }
}
