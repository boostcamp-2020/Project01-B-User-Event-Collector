//
//  TrackExtensions.swift
//  MiniVibeTests
//
//  Created by TTOzzi on 2020/12/14.
//

import Foundation
@testable import MiniVibe

extension TrackResponse: Encodable {
    enum CodingKeys: String, CodingKey {
        case data
    }
    
    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(data, forKey: .data)
    }
}

extension TrackInfo: Encodable {
    enum CodingKeys: String, CodingKey {
        case id, title, lyrics, albumId, album, artist, liked
    }
    
    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(id, forKey: .id)
        try container.encode(title, forKey: .title)
        try container.encode(lyrics, forKey: .lyrics)
        try container.encode(albumId, forKey: .albumId)
        try container.encode(album, forKey: .album)
        try container.encode(artist, forKey: .artist)
        try container.encode(liked, forKey: .liked)
    }
}

extension TrackAlbum: Encodable {
    enum CodingKeys: String, CodingKey {
        case id, title, imageUrl
    }
    
    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(id, forKey: .id)
        try container.encode(title, forKey: .title)
        try container.encode(imageUrl, forKey: .imageUrl)
    }
}

extension TrackInfo.Artist: Encodable {
    enum CodingKeys: String, CodingKey {
        case id, name
    }
    
    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(id, forKey: .id)
        try container.encode(name, forKey: .name)
    }
}
