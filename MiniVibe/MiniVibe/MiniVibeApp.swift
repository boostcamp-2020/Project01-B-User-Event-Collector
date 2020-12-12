//
//  MiniVibeApp.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/11/23.
//

import CoreData
import SwiftUI

@main
struct MiniVibeApp: App {
    let persistentContainer: NSPersistentContainer = {
        let container = NSPersistentContainer(name: "Event")
        container.loadPersistentStores(completionHandler: { _, _ in })
        return container
    }()
    let eventLogger: EventLogger
    
    init() {
        eventLogger = EventLogger(persistentContainer: persistentContainer)
    }
    
    var body: some Scene {
        WindowGroup {
            MainTab(viewModel: .init(eventLogger: eventLogger))
                .environmentObject(NowPlaying())
                .environmentObject(eventLogger)
                .onReceive(NotificationCenter.default.publisher(for: UIApplication.didBecomeActiveNotification)) { _ in
                    eventLogger.send(Active(userId: 0))
                }
                .onReceive(NotificationCenter.default.publisher(for: UIApplication.didEnterBackgroundNotification)) { _ in
                    eventLogger.send(Background(userId: 0))
                }
                .onReceive(NotificationCenter.default.publisher(for: UIApplication.willEnterForegroundNotification)) { _ in
                    eventLogger.send(Foreground(userId: 0))
                }
                .onReceive(NotificationCenter.default.publisher(for: UIApplication.willTerminateNotification)) { _ in
                    eventLogger.send(Terminate(userId: 0))
                }
        }
    }
}
