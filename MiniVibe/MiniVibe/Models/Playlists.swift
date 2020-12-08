//
//  Playlists.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/07.
//

import Foundation

struct Playlists: Decodable {
    let data: [Playlist]
}

struct Playlist: Decodable {
    let id: Int
    let title: String
    let subTitle: String?
    let description: String?
    let imageUrl: String?
    let customized: Bool
    let tracks: [TrackInfo]?
}
