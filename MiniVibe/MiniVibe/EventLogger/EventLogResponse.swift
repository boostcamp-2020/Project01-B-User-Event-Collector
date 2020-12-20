//
//  EventLogResponse.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/20.
//

import Foundation

struct EventLogResponse: Decodable {
    let data: [EventLog]
}

struct EventLog: Decodable {
    var event: String?
    var platform: String
    var timestamp: String
}

extension EventLog: CustomStringConvertible {
    var description: String {
        return "\(timestamp)\n\(event ?? "none")"
    }
}
