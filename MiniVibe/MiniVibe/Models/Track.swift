//
//  Track.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/07.
//

import Foundation

struct Track: Decodable {
    let id: Int
    let title: String
}

struct TrackResponse: Decodable {
    let data: [TrackInfo]
}

struct TrackInfo: Decodable {
    let id: Int
    let title: String
    let lyrics: String
    let albumId: Int
    let album: TrackAlbum
    let artist: Artist
}

struct TrackAlbum: Decodable {
    let title: String
    let imageUrl: String
}
