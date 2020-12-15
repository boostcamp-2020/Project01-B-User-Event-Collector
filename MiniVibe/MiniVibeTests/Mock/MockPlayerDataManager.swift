//
//  MockPlayerDataManager.swift
//  MiniVibeTests
//
//  Created by TTOzzi on 2020/12/16.
//

import Foundation
@testable import MiniVibe

struct MockPlayerDataManager: PlayerDataManagerType {
    let data: [TrackViewModel]
    var saveHandler: (([TrackViewModel]) -> Void)?
    
    func fetch() -> [TrackViewModel] {
        return data
    }
    
    func saveTracks(tracks: [TrackViewModel]) {
        saveHandler?(tracks)
    }
}
