//
//  Transition+CoreDataClass.swift
//  
//
//  Created by TTOzzi on 2020/12/09.
//
//

import Foundation
import CoreData

@objc(Transition)
public class Transition: NSManagedObject {
    
}

extension Transition {

    @nonobjc public class func fetchRequest() -> NSFetchRequest<Transition> {
        return NSFetchRequest<Transition>(entityName: "Transition")
    }

    @NSManaged public var event: String
    @NSManaged public var userId: Int
    @NSManaged public var page: String
    @NSManaged public var componentId: String
    @NSManaged public var timestamp: Date
    @NSManaged public var platform: String
}

extension Transition: EventPrintable {
    public override var description: String {
        return "\(timestamp.timestampFormat())\nEvent: \(event)\nPage: \(page)\nComponent: \(componentId)"
    }
}

extension Transition: Encodable {
    
    enum CodingKeys: CodingKey {
        case event, userId, page, componentId, timestamp, platform
    }
    
    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(event, forKey: .event)
        try container.encode(userId, forKey: .userId)
        try container.encode(page, forKey: .page)
        try container.encode(componentId, forKey: .componentId)
        try container.encode(timestamp, forKey: .timestamp)
        try container.encode(platform, forKey: .platform)
    }
}
