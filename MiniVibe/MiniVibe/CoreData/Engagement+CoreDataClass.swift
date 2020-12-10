//
//  Engagement+CoreDataClass.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/11.
//
//

import Foundation
import CoreData

@objc(Engagement)
public class Engagement: NSManagedObject {

}

extension Engagement {

    @nonobjc public class func fetchRequest() -> NSFetchRequest<Engagement> {
        return NSFetchRequest<Engagement>(entityName: "Engagement")
    }

    @NSManaged public var event: String
    @NSManaged public var userId: Int
    @NSManaged public var timestamp: Date

}

extension Engagement: EventPrintable {
    public override var description: String {
        return "\(timestamp.timestampFormat())\nEvent: \(event)"
    }
}

extension Engagement: Encodable {
    
    enum CodingKeys: CodingKey {
        case event, userId, timestamp
    }
    
    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(event, forKey: .event)
        try container.encode(userId, forKey: .userId)
        try container.encode(timestamp, forKey: .timestamp)
    }
}
