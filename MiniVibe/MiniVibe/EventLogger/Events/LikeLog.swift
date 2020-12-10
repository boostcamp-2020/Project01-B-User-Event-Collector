//
//  LikeLog.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/10.
//

import CoreData

protocol LikeLogType: EventLogType {
    var componentId: String { get }
    var data: LogData { get }
    var isLike: Bool { get }
    var timestamp: Date { get }
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
    let componentId: String
    var data: LogData
    var isLike: Bool
    let timestamp: Date = Date()
}
