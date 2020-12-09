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
    @Environment(\.scenePhase) var scenePhase
    let persistentContainer: NSPersistentContainer = {
        let container = NSPersistentContainer(name: "Event")
        container.loadPersistentStores(completionHandler: { _, _ in })
        return container
    }()
    
    var body: some Scene {
        WindowGroup {
            MainTab()
                .environmentObject(NowPlaying())
                .environmentObject(EventLogger(persistentContainer: persistentContainer))
                .onChange(of: scenePhase) { newScenePhase in
                    switch newScenePhase {
                    case .active:
                        print("active")
                    case .inactive:
                        print("inactive")
                    case .background:
                        print("background")
                    @unknown default:
                        print("unknown")
                    }
                }
        }
    }
}
