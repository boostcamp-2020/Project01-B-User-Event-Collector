//
//  EventType.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/10.
//

import CoreData
import Foundation

protocol EventLogType {
    var event: String { get }
    var userId: Int { get }
    var timestamp: String { get }
    
    func save(context: NSManagedObjectContext)
}

extension EventLogType {
    var event: String {
        return String(describing: Self.self)
    }
}
