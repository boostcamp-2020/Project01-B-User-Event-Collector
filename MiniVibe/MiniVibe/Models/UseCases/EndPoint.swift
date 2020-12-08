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
    case tracks
    case magazines
    case playlists
    case playlist(id: Int)
    case newsList
    
    static private let baseURL = "http://101.101.209.213:3000"
    
    private var path: String {
        switch self {
        case .mixtapes:
            return "/api/mixtapes"
        case .albums:
            return "/api/albums"
        case let .album(id):
            return "/api/albums/\(id)"
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
        }
    }
    
    var urlString: String {
        return Self.baseURL + path
    }
}
