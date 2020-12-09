//
//  PlayListMenu.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/03.
//

import SwiftUI

struct PlayListMenu: View {
    @Environment(\.presentationMode) var presentationMode
    let playlist: Playlist
    
    var body: some View {
        VStack(spacing: 36) {
            Spacer()
            MenuThumbnailButton()
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
        PlayListMenu(playlist: .init(id: 0, title: "", subTitle: "", description: "", imageUrl: "", customized: false, tracks: []))
    }
}
