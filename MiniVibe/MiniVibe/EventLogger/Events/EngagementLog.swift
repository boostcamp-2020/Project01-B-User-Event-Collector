//
//  Engagement.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/11.
//

import Foundation
import CoreData
import EventLogKit

protocol EngagementLogType: CustomEventLogType {
    
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
    let event = "Active"
    let platform = "iOS"
}

struct Foreground: EngagementLogType {
    let userId: Int
    let timestamp = Date()
    let event = "Foreground"
    let platform = "iOS"
}

struct Background: EngagementLogType {
    let userId: Int
    let timestamp = Date()
    let event = "Background"
    let platform = "iOS"
}

struct Terminate: EngagementLogType {
    let userId: Int
    let timestamp = Date()
    let event = "Terminate"
    let platform = "iOS"
}
