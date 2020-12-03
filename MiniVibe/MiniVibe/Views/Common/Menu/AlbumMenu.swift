//
//  AlbumMenu.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/02.
//

import SwiftUI

struct AlbumMenu: View {
    @Environment(\.presentationMode) var presentationMode
    @EnvironmentObject var nowPlaying: NowPlaying
    let title: String
    let subtitle: String
    
    var body: some View {
        VStack(spacing: 36) {
            Spacer()
            MenuThumbnailButton(title: title,
                                subtitle: subtitle) {
                presentationMode.wrappedValue.dismiss()
                if nowPlaying.setDestination(.album(title: title, subtitle: subtitle)) {
                    nowPlaying.isNavigationActive = true
                }
            }
            MenuButton(type: .download(.album))
            MenuButton(type: .like(false))
            MenuButton(type: .addToPlaylist)
            MenuButton(type: .share)
            MenuCloseButton {
                presentationMode.wrappedValue.dismiss()
            }
        }
    }
}

struct AlbumMenu_Previews: PreviewProvider {
    static var previews: some View {
        AlbumMenu(title: "Dynamite", subtitle: "방탄소년단")
    }
}
