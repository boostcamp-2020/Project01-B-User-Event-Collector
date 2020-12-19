//
//  EventLogViewModel.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/10.
//

import Combine
import Foundation

final class EventLogViewModel: ObservableObject {
    enum Input {
        case appear
    }
    
    struct State {
        let category = ["Local", "Server", "Server(play)"]
        var local: [EventPrintable] = []
        var commonEvents: [EventLog] = []
        var playEvents: [EventLog] = []
        var selection = 0
    }
    
    @Published var state = State()
    private let useCase: EventLogUseCaseType
    private let localStorage: LocalEventStorage?
    private var cancellables: Set<AnyCancellable> = []
    
    init(useCase: EventLogUseCaseType = EventLogUseCase(),
         localStorage: LocalEventStorage?) {
        self.useCase = useCase
        self.localStorage = localStorage
    }
    
    func send(input: Input) {
        switch input {
        case .appear:
            load()
        }
    }
    
    private func load() {
        cancellables = []
        state.local = localStorage?.events() ?? []
        useCase.loadCommonEvents()
            .sink { [weak self] in self?.state.commonEvents = $0 }
            .store(in: &cancellables)
        useCase.loadPlayEvents()
            .sink { [weak self] in self?.state.playEvents = $0 }
            .store(in: &cancellables)
    }
}
