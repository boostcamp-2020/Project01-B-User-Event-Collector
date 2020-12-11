//
//  ComponentId.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/12.
//

import Foundation

enum ComponentId: CustomStringConvertible {
    case sectionTitle(category: String)
    case mixtapeItem
    case playlistRow
    case playlistItem(section: String)
    case playlistMenuButton
    case playlistDescription
    case magazineRow
    case magazineItem
    case lyrics
    case playerPreview
    case trackMenuButton
    case albumItem
    case albumDescription
    case albumMenuButton
    case trackRowThumbnail
    case newsItem
    case artistRow
    case artistItem
    
    var description: String {
        switch self {
        case let .sectionTitle(category):
            return "\(category)_sectionTitle"
        case .mixtapeItem:
            return "mixtapeItem"
        case .playlistRow:
            return "playlistRow"
        case let .playlistItem(section):
            return "\(section)_playlistItem"
        case .playlistMenuButton:
            return "playlistMenuButton"
        case .playlistDescription:
            return "playlistDescription"
        case .magazineRow:
            return "magazineRow"
        case .magazineItem:
            return "magazineItem"
        case .lyrics:
            return "lyrics"
        case .playerPreview:
            return "playerPreview"
        case .trackMenuButton:
            return "trackMenuButton"
        case .albumItem:
            return "albumItem"
        case .albumDescription:
            return "albumDescription"
        case .albumMenuButton:
            return "albumMenuButton"
        case .trackRowThumbnail:
            return "trackRowThumbnail"
        case .newsItem:
            return "newsItem"
        case .artistRow:
            return "artistRow"
        case .artistItem:
            return "artistItem"
        }
    }
}
