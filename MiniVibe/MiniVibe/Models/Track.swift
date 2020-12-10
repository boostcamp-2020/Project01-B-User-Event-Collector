//
//  Track.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/07.
//

import Foundation

let trackinfo: TrackInfo = TrackInfo(id: 0,
                                     title: "작은 방 (Feat.아이유)",
                                     lyrics: "",
                                     albumId: 0,
                                     album:
                                        TrackAlbum(id: 0,
                                                   title: "",
                                                   imageUrl: ""),
                                     artist: TrackInfo.Artist(id: 1,
                                                              name: "스윗소로우"),
                                     liked: 1)

struct TrackResponse: Decodable {
    let data: [TrackInfo]
}

struct TrackInfo: Decodable, Hashable {
    struct Artist: Decodable {
        let id: Int
        let name: String
    }
    
    let id: Int
    let title: String
    let lyrics: String
    let albumId: Int?
    let album: TrackAlbum
    let artist: Artist
    var liked: Int // 1 = like, 0 = hate
    
    func hash(into hasher: inout Hasher) {
        hasher.combine(id)
    }
    
    static func == (lhs: TrackInfo, rhs: TrackInfo) -> Bool {
        return lhs.id == rhs.id
    }
}

struct TrackAlbum: Decodable {
    let id: Int
    let title: String
    let imageUrl: String
}
