//
//  MiniVibeApp.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/11/23.
//

import SwiftUI
import EventLogKit

class AppDelegate: NSObject, UIApplicationDelegate {
    var nowPlaying: NowPlayingViewModel?
    
    func application(
        _ application: UIApplication,
        didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]? = nil
    ) -> Bool {
        nowPlaying?.send(.launch)
        return true
    }
}

@main
struct MiniVibeApp: App {
    @UIApplicationDelegateAdaptor(AppDelegate.self) var appDelegate
    
    static let eventLogger = EventLogger(local: LocalEventStorage(),
                                         server: ServerEventStorage(),
                                         reachability: ReachablilityObserver(hostName: "wwwom"))
    
    let nowPlaying = NowPlayingViewModel()
    
    init() {
        appDelegate.nowPlaying = nowPlaying
    }
    
    var body: some Scene {
        WindowGroup {
            MainTab()
                .environmentObject(nowPlaying)
                .onReceive(
                    NotificationCenter.default.publisher(
                        for: UIApplication.didBecomeActiveNotification)) { _ in
                    MiniVibeApp.eventLogger.send(Active(userId: 0))
                }
                .onReceive(
                    NotificationCenter.default.publisher(
                        for: UIApplication.willResignActiveNotification)) { _ in
                    nowPlaying.send(.resignActive)
                    MiniVibeApp.eventLogger.send(Background(userId: 0))
                }
                .onReceive(
                    NotificationCenter.default.publisher(
                        for: UIApplication.willEnterForegroundNotification)) { _ in
                    MiniVibeApp.eventLogger.send(Foreground(userId: 0))
                }
                .onReceive(
                    NotificationCenter.default.publisher(
                        for: UIApplication.willTerminateNotification)) { _ in
                    MiniVibeApp.eventLogger.send(Terminate(userId: 0))
                }
        }
    }
}
