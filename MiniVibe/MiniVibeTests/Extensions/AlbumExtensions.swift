//
//  AlbumExtensions.swift
//  MiniVibeTests
//
//  Created by TTOzzi on 2020/12/14.
//

import Foundation
@testable import MiniVibe

extension Albums: Encodable {
    enum CodingKeys: String, CodingKey {
        case data
    }
    
    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(data, forKey: .data)
    }
}

extension Album: Encodable {
    enum CodingKeys: String, CodingKey {
        case id, title, description, releaseDate, artist, imageUrl, tracks
    }
    
    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(id, forKey: .id)
        try container.encode(title, forKey: .title)
        try container.encode(description, forKey: .description)
        try container.encode(releaseDate, forKey: .releaseDate)
        try container.encode(artist, forKey: .artist)
        try container.encode(imageUrl, forKey: .imageUrl)
        try container.encode(tracks, forKey: .tracks)
    }
}

extension Album.Artist: Encodable {
    enum CodingKeys: String, CodingKey {
        case id, name
    }
    
    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(id, forKey: .id)
        try container.encode(name, forKey: .name)
    }
}
