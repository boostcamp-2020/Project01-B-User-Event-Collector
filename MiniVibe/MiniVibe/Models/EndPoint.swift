//
//  EndPoint.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/07.
//

import Foundation

enum EndPoint {
    case albums
    case album(id: Int)
    case magazines
    case playlists
    
    static private let baseURL = "http://101.101.209.213:3000"
    
    private var path: String {
        switch self {
        case .albums:
            return "/api/albums"
        case let .album(id):
            return "/api/albums/\(id)"
        case .magazines:
            return "/api/magazines"
        case .playlists:
            return "/api/playlists"
        }
    }
    
    var urlString: String {
        return Self.baseURL + path
    }
}
