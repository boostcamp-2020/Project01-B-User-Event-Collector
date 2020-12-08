//
//  ViewIdentifier.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/08.
//

import Foundation

enum ViewIdentifier: CustomStringConvertible, Hashable {
    case today
    case charts
    case search
    case library
    case recommendedRecentAlbum
    case album(id: Int)
    case albumMenu(id: Int)
    case mixtapes
    case playlist(id: Int)
    case playlists(id: Int) // 각각의 플레이리스트 목록에 id가 있다고 가정(현재 API에는 구현되어있지 않음)
    case magazine(id: Int)
    case station
    case player
    case lyrics(id: Int)
    case playerMenu(id: Int)
    case chart(id: Int)
    
    var description: String {
        switch self {
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
            return "album \(id)"
        case let .albumMenu(id):
            return "album menu \(id)"
        case .mixtapes:
            return "mixtapes"
        case let .playlist(id):
            return "playlist \(id)"
        case let .playlists(id):
            return "playlists \(id)"
        case let .magazine(id):
            return "magazine \(id)"
        case .station:
            return "station"
        case .player:
            return "player"
        case let .lyrics(id):
            return "lyrics \(id)"
        case let .playerMenu(id):
            return "playerMenu \(id)"
        case let .chart(id):
            return "chart \(id)"
        }
    }
}
