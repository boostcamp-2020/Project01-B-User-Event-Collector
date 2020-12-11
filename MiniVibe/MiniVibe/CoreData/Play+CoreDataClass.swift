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

