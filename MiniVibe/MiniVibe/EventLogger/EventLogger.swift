//
//  EventLogger.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/08.
//

import CoreData

final class EventLogger: ObservableObject {
    
    @Published var tabViewSelection: ViewIdentifier = .today {
        didSet {
            guard oldValue != tabViewSelection,
                  tabViewSelection != .none else { return }
            send(TabViewTransition(userId: 0,
                                   componentId: tabViewSelection.description,
                                   page: tabViewSelection.description))
        }
    }
    private let persistentContainer: NSPersistentContainer
    
    init(persistentContainer: NSPersistentContainer) {
        self.persistentContainer = persistentContainer
    }
    
    func send(_ event: EventLogType) {
        event.save(context: persistentContainer.viewContext)
    }
    
    func reset() {
        let fetchRequsts: [NSFetchRequest<NSFetchRequestResult>]
            = [Transition.fetchRequest(),
               Search.fetchRequest(),
               Like.fetchRequest(),
               Subscribe.fetchRequest(),
               MoveTrack.fetchRequest()]
        
        let deleteRequests: [NSBatchDeleteRequest]
            = fetchRequsts.map { NSBatchDeleteRequest(fetchRequest: $0) }

        deleteRequests.forEach {
            _ = try? persistentContainer.viewContext.execute($0)
        }
    }
    
    func events() -> [EventPrintable] {
        let transitions = (try? persistentContainer.viewContext
                            .fetch(Transition.fetchRequest()) as? [EventPrintable]) ?? []
        let searchLogs = (try? persistentContainer.viewContext
                            .fetch(Search.fetchRequest()) as? [EventPrintable]) ?? []
        
        let likeLogs = (try? persistentContainer.viewContext
                            .fetch(Like.fetchRequest()) as? [EventPrintable]) ?? []
        
        let subscribeLogs = (try? persistentContainer.viewContext
                                .fetch(Subscribe.fetchRequest()) as? [EventPrintable]) ?? []
        
        let moveTrackLogs = (try? persistentContainer.viewContext
                                .fetch(MoveTrack.fetchRequest()) as? [EventPrintable]) ?? []
        
        return (transitions + searchLogs + likeLogs + subscribeLogs + moveTrackLogs)
            .sorted { $0.timestamp > $1.timestamp }
    }
}
