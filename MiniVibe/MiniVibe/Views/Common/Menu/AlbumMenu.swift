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
    let album: Album
    
    var body: some View {
        VStack(spacing: 36) {
            Spacer()
            MenuThumbnailButton(title: album.title,
                                subtitle: album.artist.name,
                                imageURL: album.imageUrl) {
                presentationMode.wrappedValue.dismiss()
                if nowPlaying.setDestination(.album(id: album.id)) {
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
        AlbumMenu(album: .init(id: 1, title: "", description: "", releaseDate: "", artist: .init(id: 1, name: ""), imageUrl: "", tracks: []))
    }
}
