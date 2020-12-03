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
    @Binding var isOpenLyrics: Bool
    
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
                .onTapGesture {
                    isOpenLyrics = true
                }
            
        }
    }
}

struct PlayerThumbnail_Previews: PreviewProvider {
    static var previews: some View {
        PlayerThumbnail(image: "playListThumbnail",
                        lyrics: "밥만 잘 먹더라\n배고프다랄라\n호호호",
                        isPlaying: .constant(false),
                        isOpenLyrics: .constant(true)
        )
    }
}
