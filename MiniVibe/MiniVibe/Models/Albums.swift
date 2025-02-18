//
//  Albums.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/07.
//

import Foundation

struct Albums: Decodable {
    let data: [Album]
}

struct Album: Decodable {
    struct Artist: Decodable {
        let id: Int
        let name: String
    }
    
    let id: Int
    let title: String
    let description: String
    let releaseDate: String
    let artist: Artist
    let imageUrl: String
    let tracks: [TrackInfo]?
}
