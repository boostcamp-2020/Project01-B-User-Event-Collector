//
//  EndPoint.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/07.
//

import Foundation

enum EndPoint {
    case mixtapes
    case albums
    case album(id: Int)
    case track(id: Int)
    case tracks
    case magazines
    case playlists
    case playlist(id: Int)
    case newsList
    case artists
    case artist(id: Int)

    case like
    case cancelLike(id: Int)
  
    case events
    case playEvents
    
    case libraryTracks
    
    static private let baseURL = "http://101.101.209.213:3000"
    
    private var path: String {
        switch self {
        case .mixtapes:
            return "/api/mixtapes"
        case .albums:
            return "/api/albums"
        case let .album(id):
            return "/api/albums/\(id)"
        case let .track(id):
            return "/api/tracks/\(id)"
        case .tracks:
            return "/api/tracks"
        case .magazines:
            return "/api/magazines"
        case .playlists:
            return "/api/playlists"
        case let .playlist(id):
            return "/api/playlists/\(id)"
        case .newsList:
            return "/api/news"
        case .artists:
            return "/api/artists"
        case let .artist(id):
            return "/api/artists/\(id)"
            
        case .like:
            return "/api/library/tracks"
        case let .cancelLike(id):
            return "/api/library/tracks/\(id)"
       
        case .events:
            return "/api/events"
        case .playEvents:
            return "/api/play-events"
            
        case .libraryTracks:
            return "/api/library/tracks"
        }
    }
    
    var urlString: String {
        return Self.baseURL + path
    }
}
