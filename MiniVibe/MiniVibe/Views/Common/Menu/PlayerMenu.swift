//
//  PlayerMenu.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/01.
//

import SwiftUI

struct PlayerMenu: View {
    @EnvironmentObject private var nowPlaying: NowPlaying
    @Environment(\.presentationMode) var presentationMode
    let track: TrackInfo
    
    var body: some View {
        VStack(spacing: 36) {
            Spacer()
            MenuThumbnailButton()
            MenuButton(type: .like(nowPlaying.playingTrack?.liked ?? 0))
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
        PlayerMenu(track: trackinfo)
    }
}
