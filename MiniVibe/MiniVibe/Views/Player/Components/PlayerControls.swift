//
//  PlayerControls.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/01.
//

import SwiftUI

struct PlayerControls: View {
    @Binding var isPlaying: Bool
    @Binding var isOpenMenu: Bool
    @State private var isFavorite = false
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
                    isPlaying.toggle()
                } label: {
                    Image(systemName: isPlaying ? "pause.fill" : "play.fill")
                        .foregroundColor(.black)
                        .font(.system(size: 40))
                        .frame(height: 40)
                }
                
                Spacer()
                
                Button {
                    isFavorite.toggle()
                } label: {
                    Image(systemName: isFavorite ? "heart.fill" : "heart")
                        .foregroundColor(isFavorite ? .pink : .secondary)
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
        PlayerControls(isPlaying: .constant(false),
                       isOpenMenu: .constant(false),
                       title: "Dynamite",
                       artist: "방탄소년단")
    }
}
