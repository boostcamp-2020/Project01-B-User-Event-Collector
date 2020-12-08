//
//  PlayerMenu.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/01.
//

import SwiftUI

struct PlayerMenu: View {
    @Environment(\.presentationMode) var presentationMode
    let track: TrackInfo
    
    var body: some View {
        VStack(spacing: 36) {
            Spacer()
            MenuThumbnailButton(title: track.title,
                                subtitle: track.artist.name,
                                imageURL: track.album.imageUrl)
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
        PlayerMenu(track: .init(id: 0, title: "", lyrics: "", albumId: 0, album: .init(title: "", imageUrl: ""), artist: .init(id: 0, name: "")))
    }
}
