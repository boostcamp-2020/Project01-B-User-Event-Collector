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
    }
    
    private var viewLoggers = [
        ViewLogger(root: .today),
        ViewLogger(root: .chart),
        ViewLogger(root: .search),
        ViewLogger(root: .library)
    ]
    @Published var tabViewSelection = 0 {
        didSet {
            print("\(oldValue) -> \(tabViewSelection)")
        }
    }
    var currentViewLogger: ViewLogger {
        return viewLoggers[tabViewSelection]
    }
    
    func onAppear(identifier: ViewIdentifier) {
        currentViewLogger.viewAppear(identifier: identifier)
    }
    
    func onDisappear() {
        currentViewLogger.viewDisappear()
    }
    
    func send(_ event: Event) {
        print(event)
    }
}
