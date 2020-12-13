//
//  EventLogger.swift
//  EventLog
//
//  Created by TTOzzi on 2020/12/12.
//

import Foundation
import Reachability

public protocol EventLoggerType {
    func send(_ event: EventLogType)
}

open class EventLogger: EventLoggerType {
    
    private let local: LocalStorageType?
    private let server: ServerStorageType?
    private let reachability: ReachabilityObserving
    private var networkState: Connection = .unavailable
    
    public init(local: LocalStorageType?,
         server: ServerStorageType?,
         reachability: ReachabilityObserving) {
        self.local = local
        self.server = server
        self.reachability = reachability
        reachability.setUpNotify { [weak self] in self?.networkState = $0 }
    }
    
    public func send(_ event: EventLogType) {
        switch networkState {
        case .cellular, .wifi:
            server?.send(event)
        default:
            local?.save(event)
        }
    }
}
