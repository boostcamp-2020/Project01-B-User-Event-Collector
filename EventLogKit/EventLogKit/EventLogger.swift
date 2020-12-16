//
//  EventLogger.swift
//  EventLog
//
//  Created by TTOzzi on 2020/12/12.
//

import Foundation
import Reachability

public protocol EventLoggerType {
    func send<T: EventLogType>(_ event: T)
}

open class EventLogger: EventLoggerType {
    
    public let local: LocalStorageType?
    public let server: ServerStorageType?
    private let reachability: ReachabilityObserving
    private var networkState: Connection = .unavailable
    
    public init(local: LocalStorageType?,
         server: ServerStorageType?,
         reachability: ReachabilityObserving) {
        self.local = local
        self.server = server
        self.reachability = reachability
        reachability.setUpNotify { [weak self] in self?.networkState = $0 }
        server?.setFailureHandler { event in
            local?.save(event)
        }
    }
    
    public func send<T: EventLogType>(_ event: T) {
        switch networkState {
        case .cellular, .wifi:
            server?.send(event)
        default:
            local?.save(event)
        }
    }
}
