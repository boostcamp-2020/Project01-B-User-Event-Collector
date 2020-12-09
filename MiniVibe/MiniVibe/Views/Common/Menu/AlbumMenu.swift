//
//  AlbumMenu.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/02.
//

import SwiftUI

struct AlbumMenu: View {
    @Environment(\.presentationMode) var presentationMode
    @EnvironmentObject var eventLogger: EventLogger
    let album: Album
    
    var body: some View {
        VStack(spacing: 36) {
            Spacer()
            MenuThumbnailButton()
            MenuButton(type: .download(.album))
            MenuButton(type: .like(false))
            MenuButton(type: .addToPlaylist)
            MenuButton(type: .share)
            MenuCloseButton {
                presentationMode.wrappedValue.dismiss()
            }
        }
        .logTransition(eventLogger: eventLogger, identifier: .albumMenu(id: album.id))
    }
}

struct AlbumMenu_Previews: PreviewProvider {
    static var previews: some View {
        AlbumMenu(album: .init(id: 1, title: "", description: "", releaseDate: "", artist: .init(id: 1, name: ""), imageUrl: "", tracks: []))
    }
}
