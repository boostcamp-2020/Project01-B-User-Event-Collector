//
//  Player.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/11/30.
//

import SwiftUI

struct Player: View {
    @Binding var isMenuOpen: Bool
    @Binding var isLyricsOpen: Bool
    @EnvironmentObject private var nowPlaying: NowPlaying
    
    var body: some View {
        
        VStack {
            PlayerHeader(title: "오늘 Top 100")
            
            Spacer()
            
            PlayerThumbnail(isOpenLyrics: $isLyricsOpen)
            
            Spacer()
            
            PlayerControls(isOpenMenu: $isMenuOpen,
                           viewModel: nowPlaying.playingTrack ?? .init(track: trackinfo))
                .environmentObject(nowPlaying)
            
            Spacer()
            
            footer
        }
        .padding(16)
    }
    
    private var footer: some View {
        HStack {
            Button {
                
            } label: {
                Image(systemName: "airplayaudio")
                    .foregroundColor(.secondary)
            }
            
            Spacer()
            
            HStack(spacing: 2) {
                Text("미리듣기 중")
                Image(systemName: "info.circle")
            }
            .foregroundColor(.accentColor)
            .font(.system(size: 12))
            .logSubscription(componentId: "")
            
            Spacer()
            
            Button {
                
            } label: {
                Image(systemName: "music.note.list")
                    .foregroundColor(.secondary)
            }
        }
    }
}

struct Player_Previews: PreviewProvider {
    static var previews: some View {
        Player(isMenuOpen: .constant(false),
               isLyricsOpen: .constant(false))
    }
}
