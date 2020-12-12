//
//  MiniVibeApp.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/11/23.
//

import CoreData
import SwiftUI
import EventLogKit

@main
struct MiniVibeApp: App {
    static let eventLogger = EventLogger(local: nil,
                                         server: nil,
                                         reachability: ReachablilityObserver(hostName: "www.google.com"))
    let persistentContainer: NSPersistentContainer = {
        let container = NSPersistentContainer(name: "Event")
        container.loadPersistentStores(completionHandler: { _, _ in })
        return container
    }()
    
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
