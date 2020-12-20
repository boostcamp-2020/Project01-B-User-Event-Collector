//
//  NetworkError+Equatable.swift
//  MiniVibeTests
//
//  Created by Sue Cho on 2020/11/30.
//

import Foundation
@testable import MiniVibe

extension NetworkError: Equatable {
    public static func == (lhs: Self, rhs: Self) -> Bool {
        switch (lhs, rhs) {
        case (.invalidURL, .invalidURL): return true
        case (.unsuccessfulResponse, .unsuccessfulResponse): return true
        case (.unknownError, .unknownError): return true
        default: return false
        }
    }
}
