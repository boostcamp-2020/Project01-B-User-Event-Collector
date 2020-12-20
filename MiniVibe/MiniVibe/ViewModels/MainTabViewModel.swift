//
//  MainTabViewModel.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/12.
//

import Combine
import EventLogKit

final class MainTabViewModel: ObservableObject {
    
    struct State {
        var tabViewSelection: ViewIdentifier = .today
    }
    
    private let eventLogger: EventLoggerType
    private var cancellables: Set<AnyCancellable> = []
    @Published var state = State()
    
    init(eventLogger: EventLoggerType = MiniVibeApp.eventLogger) {
        self.eventLogger = eventLogger
        
        $state
            .removeDuplicates { (prev, current) -> Bool in
                prev.tabViewSelection == current.tabViewSelection
            }
            .filter { $0.tabViewSelection != .none }
            .sink { tabItem in
                eventLogger.send(TabViewTransition(userId: 0,
                                                   componentId: tabItem.tabViewSelection.description,
                                                   page: tabItem.tabViewSelection.description))
            }
            .store(in: &cancellables)
    }

}
