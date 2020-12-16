//
//  MockEventLogger.swift
//  MiniVibeTests
//
//  Created by TTOzzi on 2020/12/14.
//

import Foundation
@testable import EventLogKit

struct MockEventLogger: EventLoggerType {
    var handler: ((EventLogType) -> Void)?
    
    func send<T>(_ event: T) where T: EventLogType {
        handler?(event)
    }
}
