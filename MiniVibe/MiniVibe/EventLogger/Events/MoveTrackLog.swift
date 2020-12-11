//
//  MoveTrackLog.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/10.
//

import Foundation
import CoreData

protocol MoveTrackLogType: EventLogType {
    var trackId: Int { get }
    var source: Int { get }
    var destination: Int { get }
}

extension MoveTrackLogType {
    func save(context: NSManagedObjectContext) {
        let moveTrack = MoveTrack(context: context)
        moveTrack.event = event
        moveTrack.userId = userId
        moveTrack.trackId = trackId
        moveTrack.source = source
        moveTrack.destination = destination
        moveTrack.timestamp = timestamp
        try? context.save()
    }
}

struct MoveTrackLog: MoveTrackLogType {
    let userId: Int
    let trackId: Int
    let source: Int
    let destination: Int
    let timestamp = Date()
}
