//
//  ShareLog.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/11.
//

import Foundation
import CoreData

protocol ShareLogType: EventLogType {
    var componentId: String { get }
    var data: LogData { get }
}

extension ShareLogType {
    func save(context: NSManagedObjectContext) {
        let shareLog = Share(context: context)
        shareLog.event = event
        shareLog.userId = userId
        shareLog.componentId = componentId
        shareLog.data = data
        shareLog.timestamp = timestamp
        try? context.save()
    }
}

struct ShareLog: ShareLogType {
    let userId: Int
    let componentId: String
    var data: LogData
    let timestamp: Date = Date()
}
