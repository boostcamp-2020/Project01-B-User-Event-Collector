//
//  PlayListMenu.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/03.
//

import SwiftUI

struct PlayListMenu: View {
    @Environment(\.presentationMode) var presentationMode
    @EnvironmentObject var nowPlaying: NowPlaying
    let title: String
    let subtitle: String
    
    var body: some View {
        VStack(spacing: 36) {
            Spacer()
            MenuThumbnailButton(title: title) {
                presentationMode.wrappedValue.dismiss()
                if nowPlaying.setDestination(.playList(title: title, subtitle: subtitle)) {
                    nowPlaying.isNavigationActive = true
                }
            }
            MenuButton(type: .download(.playList))
            MenuButton(type: .like(false))
            MenuButton(type: .addToPlaylist)
            MenuButton(type: .share)
            MenuCloseButton {
                presentationMode.wrappedValue.dismiss()
            }
        }
    }
}

struct PlayListMenu_Previews: PreviewProvider {
    static var previews: some View {
        PlayListMenu(title: "Dynamite", subtitle: "방탄소년단")
    }
}
