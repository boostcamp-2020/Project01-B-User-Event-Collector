//
//  Subscribe.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/10.
//

import CoreData
import Foundation

protocol SubscribeLogType: EventLogType {
    var componentId: String { get }
}

extension SubscribeLogType {
    func save(context: NSManagedObjectContext) {
        let subscribe = Subscribe(context: context)
        subscribe.event = event
        subscribe.userId = userId
        subscribe.componentId = componentId
        subscribe.timestamp = timestamp
        try? context.save()
    }
}

//구독권의 종류가 여러가지라면 나눌 수 있음
struct SubscribeTicket: SubscribeLogType {
    let userId: Int
    let timestamp: String
    let componentId: String
    let event: String
}
