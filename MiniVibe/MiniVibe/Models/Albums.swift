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
    let id: Int
    let title: String
    let artist: AlbumArtist
    let imageUrl: String
}

struct AlbumArtist: Decodable {
    let id: Int
    let name: String
}
