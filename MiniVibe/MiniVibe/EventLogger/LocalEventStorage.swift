//
//  LocalEventStorage.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/14.
//

import CoreData
import Foundation
import EventLogKit

final class LocalEventStorage: LocalStorageType {
    
    enum StorageType {
        case persistent, inMemory
    }
    
    private let container: NSPersistentContainer
    private var fetchRequests: [NSFetchRequest<NSFetchRequestResult>] {
        return [
            Transition.fetchRequest(),
            Search.fetchRequest(),
            Like.fetchRequest(),
            Subscribe.fetchRequest(),
            MoveTrack.fetchRequest(),
            Engagement.fetchRequest(),
            Play.fetchRequest()
        ]
    }
    
    init(_ storageType: StorageType = .persistent) {
        container = NSPersistentContainer(name: "Event")
        if storageType == .inMemory {
            let description = NSPersistentStoreDescription()
            description.url = URL(fileURLWithPath: "/dev/null")
            container.persistentStoreDescriptions = [description]
        }
        container.loadPersistentStores { (_, _) in
            
        }
    }
    
    func save(_ event: EventLogType) {
        event.save(context: container.viewContext)
    }
    
    func reset() {
        let deleteRequests = fetchRequests.map { NSBatchDeleteRequest(fetchRequest: $0) }
        
        deleteRequests.forEach {
            _ = try? container.viewContext.execute($0)
        }
    }
    
    func events() -> [EventPrintable] {
        return fetchRequests.compactMap {
            return try? container.viewContext.fetch($0) as? [EventPrintable]
        }
        .reduce(into: []) {
            $0.append(contentsOf: $1)
        }
        .sorted { $0.timestamp > $1.timestamp }
    }
}
