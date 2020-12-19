//
//  EventLogType.swift
//  EventLog
//
//  Created by TTOzzi on 2020/12/12.
//

import CoreData
import Foundation

public protocol EventLogType: Encodable, CustomStringConvertible {
    var event: String { get }
    var timestamp: Date { get }
    func save(context: NSManagedObjectContext)
}

