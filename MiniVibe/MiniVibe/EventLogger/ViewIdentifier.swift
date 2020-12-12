//
//  ViewIdentifier.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/08.
//

import Foundation

enum ViewIdentifier: CustomStringConvertible, Hashable {
    case none
    case today
    case charts
    case search
    case library
    case recommendedRecentAlbum
    case album(id: Int)
    case albumMenu(id: Int)
    case latestAlbumList
    case artistAlbumList
    case mixtapes
    case mixtape(id: Int)
    case playlist(id: Int)
    case playlistMenu(id: Int)
    case playlists(id: Int)
    case magazine(id: Int)
    case magazineList
    case station
    case player
    case lyrics(id: Int)
    case playerMenu(id: Int)
    case chart(id: Int)
    case article
    case artist(id: Int)
    case artistMenu(id: Int)
    case trackList
    
    var description: String {
        switch self {
        case .none:
            return "none"
        case .today:
            return "today"
        case .charts:
            return "charts"
        case .search:
            return "search"
        case .library:
            return "library"
        case .recommendedRecentAlbum:
            return "recommendedRecentAlbum"
        case let .album(id):
            return "album_\(id)"
        case let .albumMenu(id):
            return "albumMenu_\(id)"
        case .latestAlbumList:
            return "latestAlbumList"
        case .artistAlbumList:
            return "artistAlbumList"
        case .mixtapes:
            return "mixtapes"
        case let .mixtape(id):
            return "mixtape_\(id)"
        case let .playlist(id):
            return "playlist_\(id)"
        case let .playlistMenu(id):
            return "playlistMenu_\(id)"
        case let .playlists(id):
            return "playlists_\(id)"
        case let .magazine(id):
            return "magazine_\(id)"
        case .magazineList:
            return "magazineList"
        case .station:
            return "station"
        case .player:
            return "player"
        case let .lyrics(id):
            return "lyrics_\(id)"
        case let .playerMenu(id):
            return "playerMenu_\(id)"
        case let .chart(id):
            return "chart_\(id)"
        case .article:
            return "article"
        case let .artist(id):
            return "artist_\(id)"
        case let .artistMenu(id):
            return "artistMenu_\(id)"
        case .trackList:
            return "trackList"
        }
    }
}
