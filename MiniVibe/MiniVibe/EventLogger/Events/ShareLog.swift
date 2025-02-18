//
//  ShareLog.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/11.
//

import Foundation
import CoreData
import EventLogKit

protocol ShareLogType: CustomEventLogType {
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
        shareLog.platform = platform
        try? context.save()
    }
}

struct ShareLog: ShareLogType {
    let userId: Int
    let componentId: String
    let data: LogData
    let timestamp: Date = Date()
    let event: String = "Share"
    let platform: String = "iOS"
}
