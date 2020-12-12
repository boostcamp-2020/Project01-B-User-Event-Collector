//
//  EventLogType.swift
//  EventLog
//
//  Created by TTOzzi on 2020/12/12.
//

import CoreData
import Foundation

public protocol EventLogType: Encodable {
    var event: String { get }
    var userId: Int { get }
    var timestamp: Date { get }
    func save(context: NSManagedObjectContext)
}

public extension EventLogType {
    var event: String {
        return String(describing: Self.self)
    }
}
