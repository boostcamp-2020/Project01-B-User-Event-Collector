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

extension Save : Identifiable {

}
