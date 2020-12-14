//
//  PlaylistExtensions.swift
//  MiniVibeTests
//
//  Created by TTOzzi on 2020/12/14.
//

import Foundation
@testable import MiniVibe

extension Playlists: Encodable {
    enum CodingKeys: String, CodingKey {
        case data
    }
    
    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(data, forKey: .data)
    }
}

extension Playlist: Encodable {
    enum CodingKeys: String, CodingKey {
        case id, title, subTitle, description, imageUrl, customized, tracks
    }
    
    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(id, forKey: .id)
        try container.encode(title, forKey: .title)
        try container.encode(subTitle, forKey: .subTitle)
        try container.encode(description, forKey: .description)
        try container.encode(imageUrl, forKey: .imageUrl)
        try container.encode(customized, forKey: .customized)
        try container.encode(tracks, forKey: .tracks)
    }
}

extension Playlist: Equatable {
    public static func == (lhs: Self, rhs: Self) -> Bool {
        return lhs.id == rhs.id &&
            lhs.title == rhs.title &&
            lhs.subTitle == rhs.subTitle &&
            lhs.description == rhs.description &&
            lhs.imageUrl == rhs.imageUrl &&
            lhs.customized == rhs.customized &&
            lhs.tracks == rhs.tracks
    }
}
