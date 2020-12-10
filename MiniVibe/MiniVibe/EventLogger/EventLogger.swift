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
        let request: NSFetchRequest<NSFetchRequestResult> = Transition.fetchRequest()
        let deleteRequest = NSBatchDeleteRequest(fetchRequest: request)
        _ = try? persistentContainer.viewContext.execute(deleteRequest)
    }
    
    func events() -> [Transition] {
        return (try? persistentContainer.viewContext.fetch(Transition.fetchRequest()) as? [Transition]) ?? []
    }
}
