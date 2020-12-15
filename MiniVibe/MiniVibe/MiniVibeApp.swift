//
//  MiniVibeApp.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/11/23.
//

import SwiftUI
import EventLogKit

class AppDelegate: NSObject, UIApplicationDelegate {
    var nowPlaying: NowPlaying!
    
    func application(
        _ application: UIApplication,
        didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]? = nil
    ) -> Bool {
        let defaultTracks = nowPlaying.dataManager.fetch()
        let trackViewModel = nowPlaying.dataManager.tracksToViewModel(tracks: defaultTracks)
        nowPlaying.upNext = trackViewModel
        return true
    }
}

@main
struct MiniVibeApp: App {
    @UIApplicationDelegateAdaptor(AppDelegate.self) var appDelegate
    
    static let eventLogger = EventLogger(local: LocalEventStorage(),
                                         server: ServerEventStorage(),
                                         reachability: ReachablilityObserver(hostName: "www.google.com"))
    
    let nowPlaying = NowPlaying()
    
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
                    nowPlaying.dataManager.delete()
                    let upNext = nowPlaying.upNext
                    let tracksToSave = nowPlaying.dataManager.viewModelToTracks(viewModel: upNext)
                    nowPlaying.dataManager.saveTracks(tracks: tracksToSave)
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
