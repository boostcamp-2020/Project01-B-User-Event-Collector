//
//  Save+CoreDataClass.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/11.
//
//

import Foundation
import CoreData

@objc(Save)
public class Save: NSManagedObject {

}

extension Save {

    @nonobjc public class func fetchRequest() -> NSFetchRequest<Save> {
        return NSFetchRequest<Save>(entityName: "Save")
    }

    @NSManaged public var event: String
    @NSManaged public var userId: Int
    @NSManaged public var componentId: String
    @NSManaged public var data: LogData
    @NSManaged public var timestamp: Date

}

extension Save: EventPrintable {
    public override var description: String {
        return "\(timestamp.timestampFormat())\nEvent: \(event)\nData: \(data)\nComponent: \(componentId)"
    }
}

extension Save: Encodable {
    
    enum CodingKeys: CodingKey {
        case event, userId, componentId, data, timestamp
    }
    
    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(event, forKey: .event)
        try container.encode(userId, forKey: .userId)
        try container.encode(componentId, forKey: .componentId)
        try container.encode(data, forKey: .data)
        try container.encode(timestamp, forKey: .timestamp)
    }
}
