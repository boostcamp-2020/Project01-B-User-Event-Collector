//
//  NewsExtensions.swift
//  MiniVibeTests
//
//  Created by Sue Cho on 2020/12/14.
//

import Foundation
@testable import MiniVibe

extension NewsList: Encodable {
    enum CodingKeys: String, CodingKey {
        case data
    }
    
    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(data, forKey: .data)
    }
}

extension News: Encodable {
    enum CodingKeys: String, CodingKey {
        case id, title, imageUrl, date, link, albumId
    }
    
    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(id, forKey: .id)
        try container.encode(title, forKey: .title)
        try container.encode(imageUrl, forKey: .imageUrl)
        try container.encode(date, forKey: .date)
        try container.encode(link, forKey: .link)
        try container.encode(albumId, forKey: .albumId)
    }
}

extension News: Equatable {
    public static func == (lhs: Self, rhs: Self) -> Bool {
        return lhs.id == rhs.id &&
            lhs.title == rhs.title &&
            lhs.imageUrl == rhs.imageUrl &&
            lhs.date == rhs.date &&
            lhs.link == rhs.link &&
            lhs.albumId == rhs.albumId
    }
}
