//
//  EventLogViewModel.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/10.
//

import Foundation
import EventLogKit

final class EventLogViewModel: ObservableObject {
    enum Input {
        case appear
        case reset
    }
    
    enum State {
        case idle
        case loaded(events: [EventPrintable])
        case empty
    }
    
    @Published private(set) var state: State = .idle
    private let eventLogger: EventLoggerType
    
    init(eventLogger: EventLoggerType = MiniVibeApp.eventLogger) {
        self.eventLogger = eventLogger
    }
    
    func send(input: Input) {
        switch input {
        case .appear:
            load()
        case .reset:
            reset()
        }
    }
    
    private func load() {
//        let events = eventLogger.events()
//        state = events.isEmpty ? .empty : .loaded(events: events)
    }
    
    private func reset() {
//        eventLogger.reset()
//        state = .empty
    }
}
