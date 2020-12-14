//
//  PlayerControls.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/01.
//

import SwiftUI

struct PlayerControls: View {
    @EnvironmentObject private var nowPlaying: NowPlaying
    @Binding var isOpenMenu: Bool
    @State private var isShuffle = false
    @ObservedObject var viewModel: TrackViewModel
    
    var body: some View {
        let track = viewModel.state.track
        VStack {
            PlayerSliderView(title: track.title,
                             artist: track.artist.name,
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
                        .foregroundColor(.primary)
                        .font(.system(size: 40))
                        .frame(height: 40)
                }
                
                Spacer()
                
                Button {
                    viewModel.send(.like)
                } label: {
                    Image(systemName: track.liked == 1 ? "heart.fill" : "heart")
                        .foregroundColor(track.liked == 1 ? .accentColor : .secondary)
                        .font(.system(size: 32))
                }
                
                Spacer()
                
                Button {
                    isShuffle.toggle()
                } label: {
                    Image(systemName: "shuffle")
                        .foregroundColor(isShuffle ? .accentColor : .secondary)
                }
            }
        }
    }
}

struct PlayerControls_Previews: PreviewProvider {
    static var previews: some View {
        PlayerControls(isOpenMenu: .constant(false),
                       viewModel: .init(track: trackinfo,
                                        eventLogger: MiniVibeApp.eventLogger)
        )
    }
}
