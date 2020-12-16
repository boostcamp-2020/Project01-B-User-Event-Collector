//
//  UpnextChange+CoreDataClass.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/11.
//
//

import Foundation
import CoreData

@objc(UpnextChange)
public class UpnextChange: NSManagedObject {

}

extension UpnextChange {

    @nonobjc public class func fetchRequest() -> NSFetchRequest<UpnextChange> {
        return NSFetchRequest<UpnextChange>(entityName: "UpnextChange")
    }

    @NSManaged public var timestamp: Date
    @NSManaged public var componentId: String
    @NSManaged public var trackId: [Int]
    @NSManaged public var userId: Int
    @NSManaged public var event: String

}

extension UpnextChange: EventPrintable {
    public override var description: String {
        return "\(timestamp.timestampFormat())\nEvent: \(event)\ntracks: \(trackId)"
    }
}

extension UpnextChange: Encodable {

    enum CodingKeys: CodingKey {
        case timestamp, componentId, trackId, userId, event
    }

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(timestamp, forKey: .timestamp)
        try container.encode(componentId, forKey: .componentId)
        try container.encode(trackId, forKey: .trackId)
        try container.encode(userId, forKey: .userId)
        try container.encode(event, forKey: .event)
    }
}
