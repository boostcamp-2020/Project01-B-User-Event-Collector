//
//  EventLogger.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/08.
//

import Foundation

final class EventLogger: ObservableObject {
    enum Event {
        case search(text: String)
        case appear(identifier: ViewIdentifier)
        case disAppear(identifier: ViewIdentifier)
        case tabViewTransition(current: ViewIdentifier, destination: ViewIdentifier)
        
    }

    @Published var tabViewSelection: ViewIdentifier = .today {
        didSet {
            guard oldValue != tabViewSelection else { return }
            send(.tabViewTransition(current: oldValue, destination: tabViewSelection))
        }
    }

    func send(_ event: Event) {
        print(event)
    }
}
