//
//  ViewIdentifier.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/08.
//

import Foundation

enum ViewIdentifier: CustomStringConvertible {
    case today
    case chart
    case search
    case library
    case recommendedRecentAlbum
    
    var description: String {
        switch self {
        case .today:
            return "today"
        case .chart:
            return "chart"
        case .search:
            return "search"
        case .library:
            return "library"
        case .recommendedRecentAlbum:
            return "recommendedRecentAlbum"
        }
    }
}
