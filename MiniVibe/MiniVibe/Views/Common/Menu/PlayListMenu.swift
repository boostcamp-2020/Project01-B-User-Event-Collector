//
//  PlayListMenu.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/03.
//

import SwiftUI

struct PlayListMenu: View {
    init(viewModel: PlaylistViewModel) {
        self._viewModel = StateObject(wrappedValue: viewModel)
    }
    
    @Environment(\.presentationMode) var presentationMode
    @StateObject private var viewModel: PlaylistViewModel
    
    var body: some View {
        let playlist = viewModel.playlist
        VStack(spacing: 36) {
            Spacer()
            MenuThumbnailButton(imageUrl: playlist?.imageUrl ?? "",
                                title: playlist?.title ?? "",
                                subtitle: playlist?.subTitle ?? "")
            MenuButton(type: .download(.playList)) {
                
            }
            MenuButton(type: .like(0)) {
                viewModel.send(.like)
            }
            MenuButton(type: .addToPlaylist) {
                
            }
            MenuButton(type: .share) {
                
            }
            MenuCloseButton {
                presentationMode.wrappedValue.dismiss()
            }
        }
    }
}

struct PlayListMenu_Previews: PreviewProvider {
    static var previews: some View {
        PlayListMenu(viewModel: .init(id: 0, eventLogger: MiniVibeApp.eventLogger))
    }
}
