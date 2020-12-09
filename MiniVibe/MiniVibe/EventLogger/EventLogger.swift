//
//  EventLogger.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/08.
//

import CoreData
import Foundation

final class EventLogger: ObservableObject {
    enum Event: CustomStringConvertible {
        case search(text: String)
        case appear(identifier: ViewIdentifier)
        case disAppear(identifier: ViewIdentifier)
        case tabViewTransition(identifier: ViewIdentifier)
        
        var description: String {
            switch self {
            case .search:
                return "search"
            case .appear:
                return "appear"
            case .disAppear:
                return "disAppear"
            case .tabViewTransition:
                return "tabViewTransition"
            }
        }
    }
    
    @Published var tabViewSelection: ViewIdentifier = .today {
        didSet {
            guard oldValue != tabViewSelection else { return }
            send(.tabViewTransition(identifier: tabViewSelection))
        }
    }
    private let persistentContainer: NSPersistentContainer
    
    init(persistentContainer: NSPersistentContainer) {
        self.persistentContainer = persistentContainer
    }
    
    func send(_ event: Event) {
        switch event {
        case .search:
            break
        case let .appear(identifier),
             let .disAppear(identifier),
             let .tabViewTransition(identifier):
            saveTransition(event: event.description,
                           identifier: identifier.description,
                           componentId: "componentId")
        }
    }
    
    private func saveTransition(event: String, identifier: String, componentId: String) {
        let context = persistentContainer.viewContext
        let transition = Transition(context: context)
        transition.userId = 0
        transition.componentId = componentId
        transition.event = event
        transition.page = identifier
        transition.timestamp = Date().timestampFormat()
        try? context.save()
    }
}
