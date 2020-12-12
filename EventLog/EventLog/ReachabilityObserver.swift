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
    var state: Reachability.Connection { get }
    var stateHandler: ((Reachability.Connection) -> Void)? { get }
    func setUpNotify(_ action: ((Reachability.Connection) -> Void)?)
}

open class ReachablilityObserver: ReachabilityObserving {
    
    public let hostName: String
    public private(set) var state: Reachability.Connection = .unavailable {
        didSet {
            stateHandler?(state)
        }
    }
    public private(set) var stateHandler: ((Reachability.Connection) -> Void)?
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
        reachability?.whenReachable = { [weak self] in self?.state = $0.connection }
        reachability?.whenUnreachable = { [weak self] in self?.state = $0.connection }
        try? reachability?.startNotifier()
    }
    
    public func setUpNotify(_ action: ((Reachability.Connection) -> Void)?) {
        stateHandler = action
    }
}
