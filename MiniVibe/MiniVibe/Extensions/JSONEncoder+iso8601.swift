//
//  JSONEncoder+iso8601.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/20.
//

import Foundation

extension Formatter {
    static let iso8601Custom: DateFormatter = {
        let formatter = DateFormatter()
        formatter.calendar = Calendar(identifier: .iso8601)
        formatter.locale = .current
        formatter.timeZone = .current
        formatter.dateFormat = "yyyy-MM-dd'T'HH:mm:ss.SSSXXXXX"
        return formatter
    }()
}

extension JSONEncoder.DateEncodingStrategy {
    static let iso8601Custom = custom {
        var container = $1.singleValueContainer()
        let date = $0.addingTimeInterval(32400)
        try container.encode(Formatter.iso8601Custom.string(from: date))
    }
}
