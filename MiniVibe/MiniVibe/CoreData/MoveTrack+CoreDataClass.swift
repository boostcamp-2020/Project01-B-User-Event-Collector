//
//  MoveTrack+CoreDataClass.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/10.
//
//

import Foundation
import CoreData

@objc(MoveTrack)
public class MoveTrack: NSManagedObject {
    
}

extension MoveTrack {
    
    @nonobjc public class func fetchRequest() -> NSFetchRequest<MoveTrack> {
        return NSFetchRequest<MoveTrack>(entityName: "MoveTrack")
    }
    
    @NSManaged public var event: String
    @NSManaged public var userId: Int
    @NSManaged public var trackId: Int
    @NSManaged public var source: Int
    @NSManaged public var destination: Int
    @NSManaged public var timestamp: Date
    @NSManaged public var platform: String
}

extension MoveTrack: EventPrintable {
    public override var description: String {
        return  """
                \(timestamp.timestampFormat())
                Event: \(event)
                TrackID: \(trackId)
                Source Index: \(source) -> Destination Index: \(destination)
                """
    }
}

extension MoveTrack: Encodable {
    
    enum CodingKeys: CodingKey {
        case event, userId, trackId, source, destination, timestamp, platform
    }
    
    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(event, forKey: .event)
        try container.encode(userId, forKey: .userId)
        try container.encode(trackId, forKey: .trackId)
        try container.encode(source, forKey: .source)
        try container.encode(destination, forKey: .destination)
        try container.encode(timestamp, forKey: .timestamp)
        try container.encode(platform, forKey: .platform)
    }
}
