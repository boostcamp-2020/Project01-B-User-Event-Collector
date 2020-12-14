//
//  PlaylistViewModelExtensions.swift
//  MiniVibeTests
//
//  Created by TTOzzi on 2020/12/15.
//

import Foundation
@testable import MiniVibe

extension PlaylistViewModel.State.ActiveSheet: Equatable {
    public static func == (lhs: Self, rhs: Self) -> Bool {
        switch (lhs, rhs) {
        case (.playlist, .playlist):
            return true
        case let (.track(lhsInfo), .track(rhsInfo)):
            return lhsInfo === rhsInfo
        default:
            return false
        }
    }
}
