//
//  Search+CoreDataClass.swift
//  
//
//  Created by TTOzzi on 2020/12/10.
//
//

import Foundation
import CoreData

@objc(Search)
public class Search: NSManagedObject {

}

extension Search {

    @nonobjc public class func fetchRequest() -> NSFetchRequest<Search> {
        return NSFetchRequest<Search>(entityName: "Search")
    }

    @NSManaged public var componentId: String
    @NSManaged public var event: String
    @NSManaged public var userId: Int
    @NSManaged public var text: String
    @NSManaged public var timestamp: Date

}

extension Search: EventPrintable {
    public override var description: String {
        return "\(timestamp.timestampFormat())\nEvent: \(event)\ntext: \(text)\nComponent: \(componentId)"
    }
}

extension Search: Encodable {
    
    enum CodingKeys: CodingKey {
        case event, userId, text, componentId, timestamp
    }
    
    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(event, forKey: .event)
        try container.encode(userId, forKey: .userId)
        try container.encode(text, forKey: .text)
        try container.encode(componentId, forKey: .componentId)
        try container.encode(timestamp, forKey: .timestamp)
    }
}
