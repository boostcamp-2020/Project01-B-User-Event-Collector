//
//  Transitions.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/10.
//

import CoreData
import Foundation

protocol TransitionLogType: EventLogType {
    var componentId: String { get }
    var page: String { get }
}

extension TransitionLogType {
    func save(context: NSManagedObjectContext) {
        let transition = Transition(context: context)
        transition.event = event
        transition.userId = userId
        transition.componentId = componentId
        transition.page = page
        transition.timestamp = timestamp
        
        try? context.save()
    }
}

struct Appear: TransitionLogType {
    let userId: Int
    let componentId: String
    let page: String
    let timestamp = Date().timestampFormat()
}

struct Disappear: TransitionLogType {
    let userId: Int
    let componentId: String
    let page: String
    let timestamp = Date().timestampFormat()
}

struct TabViewTransition: TransitionLogType {
    let userId: Int
    let componentId: String
    let page: String
    let timestamp = Date().timestampFormat()
}
