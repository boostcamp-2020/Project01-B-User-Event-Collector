//
//  Subscribe+CoreDataClass.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/10.
//
//

import Foundation
import CoreData

@objc(Subscribe)
public class Subscribe: NSManagedObject {

}

extension Subscribe {

    @nonobjc public class func fetchRequest() -> NSFetchRequest<Subscribe> {
        return NSFetchRequest<Subscribe>(entityName: "Subscribe")
    }

    @NSManaged public var userId: Int
    @NSManaged public var timestamp: Date
    @NSManaged public var componentId: String
    @NSManaged public var event: String

}

extension Subscribe: EventPrintable {
    public override var description: String {
        return "\(timestamp.timestampFormat())\nEvent: \(event)\nComponent: \(componentId)"
    }
}

extension Subscribe: Encodable {
    
    enum CodingKeys: CodingKey {
        case userId, timestamp, componentId, event
    }
    
    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(userId, forKey: .userId)
        try container.encode(timestamp, forKey: .timestamp)
        try container.encode(componentId, forKey: .componentId)
        try container.encode(event, forKey: .componentId)
    }
}
