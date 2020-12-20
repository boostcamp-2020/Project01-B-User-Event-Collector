//
//  AlbumMenu.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/02.
//

import SwiftUI

struct AlbumMenu: View {
    @Environment(\.presentationMode) var presentationMode
    @StateObject private var viewModel: AlbumViewModel
    
    init(viewModel: AlbumViewModel) {
        self._viewModel = StateObject(wrappedValue: viewModel)
    }
    
    var body: some View {
        let album = viewModel.state.album
        VStack(spacing: 36) {
            Spacer()
            MenuThumbnailButton(imageUrl: album?.imageUrl ?? "",
                                title: album?.title ?? "",
                                subtitle: album?.artist.name ?? "")
            MenuButton(type: .download(.album)) {
                
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

struct AlbumMenu_Previews: PreviewProvider {
    static var previews: some View {
        AlbumMenu(viewModel: .init(id: 1, eventLogger: MiniVibeApp.eventLogger))
    }
}
