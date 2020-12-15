//
//  SaveLog.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/11.
//

import CoreData
import EventLogKit

protocol SaveLogType: EventLogType {
    var componentId: String { get }
    var data: LogData { get }
}

extension SaveLogType {
    func save(context: NSManagedObjectContext) {
        let saveLog = Save(context: context)
        saveLog.event = event
        saveLog.userId = userId
        saveLog.timestamp = timestamp
        saveLog.componentId = componentId
        saveLog.data = data
        try? context.save()
    }
}

struct SaveLog: SaveLogType {
    let userId: Int
    let componentId: String
    let data: LogData
    let timestamp = Date()
    let event = "Save"
    let platform = "iOS"
}
