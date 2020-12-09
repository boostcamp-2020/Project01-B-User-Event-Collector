//
//  Transition+CoreDataProperties.swift
//  
//
//  Created by TTOzzi on 2020/12/09.
//
//

import Foundation
import CoreData

extension Transition {

    @nonobjc public class func fetchRequest() -> NSFetchRequest<Transition> {
        return NSFetchRequest<Transition>(entityName: "Transition")
    }

    @NSManaged public var event: String
    @NSManaged public var userId: Int16
    @NSManaged public var page: String
    @NSManaged public var componentId: String
    @NSManaged public var timestamp: String

}

extension Transition {
    public override var description: String {
        return "\(timestamp) - Event: \(event), Page: \(page), Component: \(componentId)"
    }
}
