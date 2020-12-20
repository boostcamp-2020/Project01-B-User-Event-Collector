//
//  EventEndPoint.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/20.
//

import Foundation

enum EventEndPoint {
    
    case play
    case common
    
    static private let baseURL = "http://49.50.174.152:5500"
    private var path: String {
        switch self {
        case .play:
            return "/api/play-events"
        case .common:
            return "/api/events"
        }
    }
    
    var urlString: String {
        return Self.baseURL + path
    }
}
