//
//  Share+CoreDataClass.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/11.
//
//

import Foundation
import CoreData

@objc(Share)
public class Share: NSManagedObject {

}

extension Share {

    @nonobjc public class func fetchRequest() -> NSFetchRequest<Share> {
        return NSFetchRequest<Share>(entityName: "Share")
    }

    @NSManaged public var event: String
    @NSManaged public var userId: Int
    @NSManaged public var componentId: String
    @NSManaged public var data: LogData
    @NSManaged public var timestamp: Date
    @NSManaged public var platform: String
}

extension Share: EventPrintable { 
    public override var description: String {
        return "\(timestamp.timestampFormat())\nEvent: \(event)\nData: \(data)\nComponent: \(componentId)"
    }
}

extension Share: Encodable {

    enum CodingKeys: CodingKey {
        case event, userId, componentId, data, timestamp, platform
    }

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(event, forKey: .event)
        try container.encode(userId, forKey: .userId)
        try container.encode(componentId, forKey: .componentId)
        try container.encode(data, forKey: .data)
        try container.encode(timestamp, forKey: .timestamp)
        try container.encode(platform, forKey: .platform)
    }
}
