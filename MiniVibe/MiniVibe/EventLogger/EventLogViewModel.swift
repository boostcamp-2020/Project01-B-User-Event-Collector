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
    }
    
    struct State {
        let category = ["Local", "Server"]
        var local: [EventPrintable] = []
        var server: [EventLogType] = []
        var selection = 0
    }
    
    @Published var state = State()
    private let localStorage: LocalEventStorage?
    private let serverStorage: ServerEventStorage?
    
    init(localStorage: LocalEventStorage?,
         serverStorage: ServerEventStorage?) {
        self.localStorage = localStorage
        self.serverStorage = serverStorage
    }
    
    func send(input: Input) {
        switch input {
        case .appear:
            load()
        }
    }
    
    private func load() {
        state.local = localStorage?.events() ?? []
        state.server = serverStorage?.events ?? []
    }
}
