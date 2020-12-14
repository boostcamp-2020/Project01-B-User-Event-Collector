//
//  ArtistsExtensions.swift
//  MiniVibeTests
//
//  Created by Sue Cho on 2020/12/14.
//

import Foundation
@testable import MiniVibe

extension Artists: Encodable {
    enum CodingKeys: String, CodingKey {
        case data
    }
    
    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(data, forKey: .data)
    }
}

extension Artist: Encodable {
    enum CodingKeys: String, CodingKey {
        case id, name, imageUrl, genre
    }
    
    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(id, forKey: .id)
        try container.encode(name, forKey: .name)
        try container.encode(imageUrl, forKey: .imageUrl)
        try container.encode(genre, forKey: .genre)
    }
}

extension Artist: Equatable {
    public static func == (lhs: Self, rhs: Self) -> Bool {
        return lhs.id == rhs.id &&
            lhs.name == rhs.name &&
            lhs.imageUrl == rhs.imageUrl &&
            lhs.genre.name == rhs.genre.name
    }
}

extension Genre: Encodable {
    enum CodingKeys: String, CodingKey {
        case name
    }
    
    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(name, forKey: .name)
    }
}

extension ArtistUseCase.ArtistResponse: Encodable {
    enum CodingKeys: String, CodingKey {
        case data
    }
    
    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(data, forKey: .data)
    }
}

extension ArtistInfo: Encodable {
    enum CodingKeys: String, CodingKey {
        case id, name, imageUrl, genre, tracks, albums
    }
    
    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(id, forKey: .id)
        try container.encode(name, forKey: .name)
        try container.encode(imageUrl, forKey: .imageUrl)
        try container.encode(genre, forKey: .genre)
        try container.encode(tracks, forKey: .tracks)
        try container.encode(albums, forKey: .albums)
    }
}

extension ArtistInfo.Album: Encodable {
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

extension ArtistInfo: Equatable {
    public static func == (lhs: Self, rhs: Self) -> Bool {
        return lhs.id == rhs.id &&
            lhs.name == rhs.name &&
            lhs.imageUrl == rhs.imageUrl &&
            lhs.genre.name == rhs.genre.name
    }
}
