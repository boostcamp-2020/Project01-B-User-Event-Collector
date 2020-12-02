//
//  PlayerMenu.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/01.
//

import SwiftUI

struct PlayerMenu: View {
    @Environment(\.presentationMode) var presentationMode
    @EnvironmentObject var nowPlaying: NowPlaying
    let title: String
    let subtitle: String
    
    var body: some View {
        VStack(spacing: 36) {
            Spacer()
            Button {
                nowPlaying.destination = .albumPlayList(title: title, subtitle: subtitle)
                presentationMode.wrappedValue.dismiss()
                nowPlaying.isPlayerOpen = false
                nowPlaying.isNavigationActive = true
            } label: {
                Image("playListThumbnail")
                    .resizable()
                    .aspectRatio(1, contentMode: .fit)
                    .frame(width: 80)
                VStack(alignment: .leading,
                       spacing: 4) {
                    Text(title)
                        .font(.system(size: 18, weight: .bold))
                    Text(subtitle)
                        .foregroundColor(.secondary)
                }
                .lineLimit(1)
                .padding(.horizontal, 8)
                Spacer()
                Image(systemName: "chevron.right")
                    .foregroundColor(.secondary)
            }
            .foregroundColor(.black)
            .padding(.horizontal)
            
            MenuButton(type: .like(true))
            MenuButton(type: .exclude)
            MenuButton(type: .download)
            MenuButton(type: .addToPlaylist)
            MenuButton(type: .share)
            
            VStack(spacing: 0) {
                Divider()
                Button {
                    presentationMode.wrappedValue.dismiss()
                } label: {
                    Spacer()
                    Text("닫기")
                        .foregroundColor(.secondary)
                        .font(.system(size: 18))
                    Spacer()
                }
                .padding(.vertical)
            }
        }
    }
}

struct PlayerMenu_Previews: PreviewProvider {
    static var previews: some View {
        PlayerMenu(title: "Among US", subtitle: "정혜일")
    }
}
