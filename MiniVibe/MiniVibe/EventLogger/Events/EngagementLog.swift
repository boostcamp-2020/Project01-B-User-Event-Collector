//
//  Engagement.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/11.
//

import Foundation
import CoreData
import EventLogKit

protocol EngagementLogType: EventLogType {
    
}

extension EngagementLogType {
    func save(context: NSManagedObjectContext) {
        let engagement = Engagement(context: context)
        engagement.event = event
        engagement.userId = userId
        engagement.timestamp = timestamp
        try? context.save()
    }
}

struct Active: EngagementLogType {
    let userId: Int
    let timestamp = Date()
    let event = String(describing: Self.self)
    let platform = "iOS"
}

struct Foreground: EngagementLogType {
    let userId: Int
    let timestamp = Date()
    let event = String(describing: Self.self)
    let platform = "iOS"
}

struct Background: EngagementLogType {
    let userId: Int
    let timestamp = Date()
    let event = String(describing: Self.self)
    let platform = "iOS"
}

struct Terminate: EngagementLogType {
    let userId: Int
    let timestamp = Date()
    let event = String(describing: Self.self)
    let platform = "iOS"
}
