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
            MenuThumbnailButton(title: title, subtitle: subtitle) {
                presentationMode.wrappedValue.dismiss()
                nowPlaying.isPlayerOpen = false
                if nowPlaying.setDestination(.albumPlayList(title: title, subtitle: subtitle)) {
                    nowPlaying.isNavigationActive = true
                }
            }
            
            MenuButton(type: .like(true))
            MenuButton(type: .exclude)
            MenuButton(type: .download(.music))
            MenuButton(type: .addToPlaylist)
            MenuButton(type: .share)
            MenuCloseButton {
                presentationMode.wrappedValue.dismiss()
            }
        }
    }
}

struct PlayerMenu_Previews: PreviewProvider {
    static var previews: some View {
        PlayerMenu(title: "Among US", subtitle: "정혜일")
    }
}
