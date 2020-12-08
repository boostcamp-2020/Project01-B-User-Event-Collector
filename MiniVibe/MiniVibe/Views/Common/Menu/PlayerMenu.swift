//
//  PlayerMenu.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/01.
//

import SwiftUI

struct PlayerMenu: View {
    @Environment(\.presentationMode) var presentationMode
    let title: String
    let subtitle: String
    let imageURL: String
    
    var body: some View {
        VStack(spacing: 36) {
            Spacer()
            MenuThumbnailButton(title: title, subtitle: subtitle, imageURL: imageURL)
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
        PlayerMenu(title: "Among US", subtitle: "정혜일", imageURL: "")
    }
}
