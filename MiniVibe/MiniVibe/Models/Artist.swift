//
//  Artist.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/09.
//

import Foundation

struct Artists: Decodable {
    let data: [Artist]
}

struct Artist: Decodable {
    let id: Int
    let name: String
    let imageUrl: String
    let genre: Genre
}

struct ArtistInfo: Decodable {
    struct Album: Decodable {
        let id: Int
        let title: String
        let imageUrl: String
    }
    
    let id: Int
    let name: String
    let imageUrl: String
    let genre: Genre
    let tracks: [TrackInfo]
    let albums: [Album]
}

struct Genre: Decodable {
    let name: String
}
