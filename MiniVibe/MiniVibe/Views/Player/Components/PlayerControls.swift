//
//  PlayerControls.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/01.
//

import SwiftUI

struct PlayerControls: View {
    @EnvironmentObject private var nowPlaying: NowPlaying
    @EnvironmentObject private var eventLogger: EventLogger
    @Binding var isOpenMenu: Bool
    @State private var isShuffle = false
    let title: String
    let artist: String
    
    var body: some View {
        VStack {
            PlayerSliderView(title: title,
                             artist: artist,
                             isOpenMenu: $isOpenMenu)
                .frame(height: 100)
            
            HStack {
                RepeatButton()
                
                Spacer()
                
                Button {
                    
                } label: {
                    Image(systemName: "paperplane")
                        .foregroundColor(.secondary)
                        .font(.system(size: 28))
                }
                
                Spacer()
                
                Button {
                    nowPlaying.isPlaying.toggle()
                } label: {
                    Image(systemName: nowPlaying.isPlaying ? "pause.fill" : "play.fill")
                        .foregroundColor(.black)
                        .font(.system(size: 40))
                        .frame(height: 40)
                }
                
                Spacer()
                
                Button {
                    if nowPlaying.playingTrack?.liked == 1 {
                        nowPlaying.cancelLikedTrack(id: nowPlaying.playingTrack?.id ?? 0)
                    } else {
                        nowPlaying.likeTrack(id: nowPlaying.playingTrack?.id ?? 0)
                    }
                    
                    eventLogger.send(LikeLog(userId: 0,
                                             componentId: "PlayerLikeButton",
                                             data: .init(type: "Track",
                                                         id: nowPlaying.playingTrack?.id ?? 0),
                                             isLike: nowPlaying.playingTrack?.liked == 1))
                } label: {
                    Image(systemName: nowPlaying.playingTrack?.liked == 1 ? "heart.fill" : "heart")
                        .foregroundColor(nowPlaying.playingTrack?.liked == 1 ? .pink : .secondary)
                        .font(.system(size: 32))
                }
                
                Spacer()
                
                Button {
                    isShuffle.toggle()
                } label: {
                    Image(systemName: "shuffle")
                        .foregroundColor(isShuffle ? .pink : .secondary)
                }
            }
        }
    }
}

struct PlayerControls_Previews: PreviewProvider {
    static var previews: some View {
        PlayerControls(isOpenMenu: .constant(false), title: "곰인형", artist: "린")
    }
}
