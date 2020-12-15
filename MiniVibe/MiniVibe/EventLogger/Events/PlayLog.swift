//
//  PlayLog.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/11.
//

import Foundation
import CoreData
import EventLogKit

protocol PlayLogType: CustomEventLogType {
    var trackId: Int { get }
    var componentId: String { get }
    var isPlay: Bool { get }
}

extension PlayLogType {
    func save(context: NSManagedObjectContext) {
        let play = Play(context: context)
        play.event = event
        play.userId = userId
        play.timestamp = timestamp
        play.trackId = trackId
        play.componentId = componentId
        play.isPlay = isPlay
        
        try? context.save()
    }
}

struct PlayLog: PlayLogType {
    let userId: Int
    let trackId: Int
    let componentId: String
    var isPlay: Bool
    let timestamp = Date()
}
