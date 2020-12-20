//
//  Subscribe.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/10.
//

import CoreData
import Foundation
import EventLogKit

protocol SubscribeLogType: CustomEventLogType {
    var componentId: String { get }
}

extension SubscribeLogType {
    func save(context: NSManagedObjectContext) {
        let subscribe = Subscribe(context: context)
        subscribe.event = event
        subscribe.userId = userId
        subscribe.componentId = componentId
        subscribe.timestamp = timestamp
        subscribe.platform = platform
        try? context.save()
    }
}

struct SubscribeLog: SubscribeLogType {
    let userId: Int
    let timestamp = Date()
    let componentId: String
    let event = "Subscribe"
    let platform = "iOS"
}
