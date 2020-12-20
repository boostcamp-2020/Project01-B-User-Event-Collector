//
//  AlbumViewModelExtensions.swift
//  MiniVibeTests
//
//  Created by TTOzzi on 2020/12/14.
//

import Foundation
@testable import MiniVibe

extension AlbumViewModel.State.ActiveSheet: Equatable {
    public static func == (lhs: Self, rhs: Self) -> Bool {
        switch (lhs, rhs) {
        case (.album, .album):
            return true
        case let (.track(lhsInfo), .track(rhsInfo)):
            return lhsInfo === rhsInfo
        default:
            return false
        }
    }
}
