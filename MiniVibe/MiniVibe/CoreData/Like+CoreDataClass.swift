//
//  Like+CoreDataClass.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/10.
//
//

import Foundation
import CoreData

@objc(Like)
public class Like: NSManagedObject {
    
}

extension Like {
    
    @nonobjc public class func fetchRequest() -> NSFetchRequest<Like> {
        return NSFetchRequest<Like>(entityName: "Like")
    }
    
    @NSManaged public var event: String
    @NSManaged public var userId: Int
    @NSManaged public var componentId: String
    @NSManaged public var data: LogData
    @NSManaged public var isLike: Bool
    @NSManaged public var timestamp: Date
    @NSManaged public var platform: String
}

extension Like: EventPrintable {
    public override var description: String {
        return  """
                \(timestamp.timestampFormat())
                Event: \(event)
                Data: \(data)
                IsLike: \(isLike)
                Component: \(componentId)
                """
    }
}

extension Like: Encodable {
    
    enum CodingKeys: CodingKey {
        case event, userId, componentId, data, isLike, timestamp, platform
    }
    
    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(event, forKey: .event)
        try container.encode(userId, forKey: .userId)
        try container.encode(componentId, forKey: .componentId)
        try container.encode(data, forKey: .data)
        try container.encode(isLike, forKey: .isLike)
        try container.encode(timestamp, forKey: .timestamp)
        try container.encode(platform, forKey: .platform)
    }
}
