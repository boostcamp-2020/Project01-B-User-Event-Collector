//
//  Transitions.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/10.
//

import Foundation
import CoreData

protocol TransitionLogType {
    var event: String { get }
    var userId: Int { get }
    var componentId: String { get }
    var page: String { get }
    var timestamp: String { get }
    
    func save(context: NSManagedObjectContext)
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
    let event = "Appear"
    let userId: Int
    let componentId: String
    let page: String
    let timestamp = Date().timestampFormat()
}

struct Disappear: TransitionLogType {
    let event = "Disappear"
    let userId: Int
    let componentId: String
    let page: String
    let timestamp = Date().timestampFormat()
}

struct TabViewTransition: TransitionLogType {
    let event = "TabViewTransition"
    let userId: Int
    let componentId: String
    let page: String
    let timestamp = Date().timestampFormat()
}
