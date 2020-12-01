//
//  Player.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/11/30.
//

import SwiftUI

struct Player: View {
    @State var isPlaying = false
    
    var body: some View {
        VStack {
            PlayerHeader(title: "오늘 Top 100")
            
            Spacer()
            
            PlayerThumbnail(image: "playListThumbnail",
                            lyrics: "가사가사가사가사\n가사가사\n가사\n가사가사가사가사", isPlaying: $isPlaying)
            
            Spacer()
            
            PlayerControls(isPlaying: $isPlaying)
                
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
            
            Button {
                
            } label: {
                HStack(spacing: 2) {
                    Text("미리듣기 중")
                    Image(systemName: "info.circle")
                }
                .foregroundColor(.pink)
                .font(.system(size: 12))
            }
            
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
        Player()
    }
}
