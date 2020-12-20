//
//  MockReachabilityObservers.swift
//  EventLogKitTests
//
//  Created by TTOzzi on 2020/12/13.
//

import Foundation
@testable import EventLogKit

struct AvailableReachability: ReachabilityObserving {
    var hostName: String = "test"
    var state: Connection = .unavailable
    
    func setUpNotify(_ action: ((Connection) -> Void)?) {
        action?(.wifi)
    }
}

struct UnavailableReachability: ReachabilityObserving {
    var hostName: String = "test"
    var state: Connection = .unavailable
    
    func setUpNotify(_ action: ((Connection) -> Void)?) {
        action?(.unavailable)
    }
}

final class MockReachability: ReachabilityObserving {
    var hostName: String = "test"
    var state: Connection = .unavailable {
        didSet {
            action?(state)
        }
    }
    var action: ((Connection) -> Void)?
    
    func setUpNotify(_ action: ((Connection) -> Void)?) {
        self.action = action
    }
}
