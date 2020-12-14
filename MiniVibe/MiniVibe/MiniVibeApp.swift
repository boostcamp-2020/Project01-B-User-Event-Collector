//
//  MiniVibeApp.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/11/23.
//

import SwiftUI
import EventLogKit

@main
struct MiniVibeApp: App {
    static let eventLogger = EventLogger(local: LocalEventStorage(),
                                         server: nil,
                                         reachability: ReachablilityObserver(hostName: "local"))
    
    var body: some Scene {
        WindowGroup {
            MainTab()
                .environmentObject(NowPlaying())
                .onReceive(NotificationCenter.default.publisher(for: UIApplication.didBecomeActiveNotification)) { _ in
                    MiniVibeApp.eventLogger.send(Active(userId: 0))
                }
                .onReceive(NotificationCenter.default.publisher(for: UIApplication.didEnterBackgroundNotification)) { _ in
                    MiniVibeApp.eventLogger.send(Background(userId: 0))
                }
                .onReceive(NotificationCenter.default.publisher(for: UIApplication.willEnterForegroundNotification)) { _ in
                    MiniVibeApp.eventLogger.send(Foreground(userId: 0))
                }
                .onReceive(NotificationCenter.default.publisher(for: UIApplication.willTerminateNotification)) { _ in
                    MiniVibeApp.eventLogger.send(Terminate(userId: 0))
                }
        }
    }
}
