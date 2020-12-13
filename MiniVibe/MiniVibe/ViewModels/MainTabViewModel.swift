//
//  MainTabViewModel.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/12.
//

import Combine
import EventLogKit

final class MainTabViewModel: ObservableObject {
    
    private let eventLogger: EventLoggerType
    private var cancellables: Set<AnyCancellable> = []
    @Published var tabViewSelection: ViewIdentifier = .today
    
    init(eventLogger: EventLoggerType = MiniVibeApp.eventLogger) {
        self.eventLogger = eventLogger
        $tabViewSelection
            .removeDuplicates()
            .filter { $0 != .none }
            .sink { tabItem in
                eventLogger.send(TabViewTransition(userId: 0,
                                                   componentId: tabItem.description,
                                                   page: tabItem.description))
            }
            .store(in: &cancellables)
    }
}
