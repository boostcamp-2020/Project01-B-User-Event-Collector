//
//  LatestUpnext+CoreDataClass.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/14.
//
//

import Foundation
import CoreData

@objc(LatestUpnext)
public class LatestUpnext: NSManagedObject {

}

extension LatestUpnext {

    @nonobjc public class func fetchRequest() -> NSFetchRequest<LatestUpnext> {
        return NSFetchRequest<LatestUpnext>(entityName: "LatestUpnext")
    }

    @NSManaged public var track: [TrackInfoData]

}
