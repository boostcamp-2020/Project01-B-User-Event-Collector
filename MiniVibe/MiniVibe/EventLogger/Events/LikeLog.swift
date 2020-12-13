//
//  LikeLog.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/10.
//

import CoreData
import EventLogKit

protocol LikeLogType: EventLogType {
    var componentId: String { get }
    var data: LogData { get }
    var isLike: Bool { get }
}

extension LikeLogType {
    func save(context: NSManagedObjectContext) {
        let likeLog = Like(context: context)
        likeLog.event = event
        likeLog.userId = userId
        likeLog.componentId = componentId
        likeLog.data = data
        likeLog.isLike = isLike
        likeLog.timestamp = timestamp
        try? context.save()
    }
}

struct LikeLog: LikeLogType {
    let userId: Int
    let componentId: String = "likeButton"
    var data: LogData
    var isLike: Bool
    let timestamp: Date = Date()
}
