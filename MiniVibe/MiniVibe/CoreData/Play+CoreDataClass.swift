//
//  Play+CoreDataClass.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/11.
//
//

import Foundation
import CoreData

@objc(Play)
public class Play: NSManagedObject {

}

extension Play {

    @nonobjc public class func fetchRequest() -> NSFetchRequest<Play> {
        return NSFetchRequest<Play>(entityName: "Play")
    }

    @NSManaged public var event: String
    @NSManaged public var userId: Int
    @NSManaged public var trackId: Int
    @NSManaged public var componentId: String
    @NSManaged public var isPlay: Bool
    @NSManaged public var timestamp: Date

}

extension Play: EventPrintable {
    public override var description: String {
        return "\(timestamp.timestampFormat())\nEvent: \(event)\nTrackID: \(trackId)\nisPlay: \(isPlay)"
    }
}

extension Play: Encodable {

    enum CodingKeys: CodingKey {
        case event, userId, trackId, componentId, isPlay, timestamp
    }

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(event, forKey: .event)
        try container.encode(userId, forKey: .userId)
        try container.encode(trackId, forKey: .trackId)
        try container.encode(componentId, forKey: .componentId)
        try container.encode(isPlay, forKey: .isPlay)
        try container.encode(timestamp, forKey: .timestamp)
    }
}
