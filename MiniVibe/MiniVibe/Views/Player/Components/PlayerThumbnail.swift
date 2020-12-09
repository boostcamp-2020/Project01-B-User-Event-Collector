//
//  PlayerThumbnail.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/11/30.
//

import SwiftUI
import KingfisherSwiftUI

struct PlayerThumbnail: View {
    @EnvironmentObject private var nowPlaying: NowPlaying
    @Binding var isOpenLyrics: Bool
    
    var body: some View {
        VStack {
            KFImage(URL(string: nowPlaying.playingTrack?.album.imageUrl ?? ""))
                .resizable()
                .aspectRatio(1, contentMode: .fit)
                .scaleEffect(nowPlaying.isPlaying ? 1 : 0.9)
            
            Text(nowPlaying.playingTrack?.lyrics ?? "")
                .font(.system(size: 14))
                .foregroundColor(.secondary)
                .lineLimit(2)
                .opacity(nowPlaying.isPlaying ? 1 : 0)
                .onTapGesture {
                    isOpenLyrics = true
                }
            
        }
    }
}

struct PlayerThumbnail_Previews: PreviewProvider {
    static var previews: some View {
        PlayerThumbnail(isOpenLyrics: .constant(false))
    }
}
