//
//  MultiselectTabBarItems.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/01.
//

import SwiftUI

struct TabbarButton: View {
    enum ButtonType {
        case addToPlaylist
        case save
        case delete
        
        var toCaption: String {
            switch self {
            case .addToPlaylist:
                return "Add"
            case .save:
                return "Save"
            case .delete:
                return "Delete"
            }
        }
        
        var toIcon: Image {
            switch self {
            
            case .addToPlaylist:
                return Image(systemName: "text.badge.plus")
            case .save:
                return Image(systemName: "square.and.arrow.down")
            case .delete:
                return Image(systemName: "trash")
            }
        }
    }
    
    @EnvironmentObject private var nowPlaying: NowPlaying
    let type: ButtonType
    let action: () -> Void
    
    init(type: ButtonType, action: @escaping () -> Void) {
        self.type = type
        self.action = action
    }
    
    var body: some View {
        Button {
            action()
        } label: {
            VStack(spacing: 5) {
                type.toIcon
                    .font(.system(size: 20))
                
                Text(type.toCaption)
                    .font(.caption)
            }
        }
    }
}
