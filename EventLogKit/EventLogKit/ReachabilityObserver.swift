//
//  ReachabilityObserver.swift
//  EventLog
//
//  Created by TTOzzi on 2020/12/13.
//

import Foundation
import Reachability

public protocol ReachabilityObserving {
    var hostName: String { get }
    var state: Connection { get }
    func setUpNotify(_ action: ((Connection) -> Void)?)
}

public enum Connection {
    case unavailable
    case cellular, wifi
}

open class ReachablilityObserver: ReachabilityObserving {
    
    public let hostName: String
    public private(set) var state: Connection = .unavailable {
        didSet {
            stateHandler?(state)
        }
    }
    private var stateHandler: ((Connection) -> Void)?
    private var reachability: Reachability?
    
    public init(hostName: String) {
        self.hostName = hostName
        setUpReachability()
    }
    
    deinit {
        reachability?.stopNotifier()
    }
    
    private func setUpReachability() {
        reachability = try? Reachability(hostname: hostName)
        reachability?.whenReachable = { [weak self] in self?.updateState($0.connection) }
        reachability?.whenUnreachable = { [weak self] in self?.updateState($0.connection) }
    }
    
    public func setUpNotify(_ action: ((Connection) -> Void)?) {
        stateHandler = action
        try? reachability?.startNotifier()
    }
    
    private func updateState(_ connection: Reachability.Connection) {
        switch connection {
        case .cellular:
            state = .cellular
        case .wifi:
            state = .wifi
        default:
            state = .unavailable
        }
    }
}
