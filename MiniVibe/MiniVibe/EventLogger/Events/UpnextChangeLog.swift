//
//  UpnextChangeLog.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/11.
//

import Foundation
import CoreData

protocol UpnextChangeLogType: EventLogType {
    var trackId: [Int] { get }
    var componentId: String { get }
}

extension UpnextChangeLogType {
    func save(context: NSManagedObjectContext) {
        let upnextChange = UpnextChange(context: context)
        upnextChange.timestamp = timestamp
        upnextChange.componentId = componentId
        upnextChange.trackId = trackId
        upnextChange.userId = userId
        upnextChange.event = event
        try? context.save()
    }
}

struct AddToUpnext: UpnextChangeLogType {
    let userId: Int
    let trackId: [Int]
    let componentId: String
    let timestamp = Date()
}

struct RemoveFromUpnext: UpnextChangeLogType {
    let userId: Int
    let trackId: [Int]
    let componentId: String
    let timestamp = Date()
}
