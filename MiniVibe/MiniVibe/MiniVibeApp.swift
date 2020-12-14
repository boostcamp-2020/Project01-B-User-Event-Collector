//
//  MiniVibeApp.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/11/23.
//

import CoreData
import SwiftUI
import EventLogKit

struct PersistenceController {
    
    static let shared = PersistenceController()
    let container: NSPersistentContainer
    let managedContext: NSManagedObjectContext
    let entity: NSEntityDescription
    
    init() {
        container = NSPersistentContainer(name: "User")
        container.loadPersistentStores { (storeDescription, error) in
            if let error = error as NSError? {
                print("Unresolved error \(error), \(error.userInfo)")
            }
        }
        managedContext = container.viewContext
        entity = NSEntityDescription.entity(forEntityName: "LatestUpnext", in: managedContext) ?? NSEntityDescription()
    }
    
    func delete() {
        let fetchRequest: NSFetchRequest<NSFetchRequestResult> = LatestUpnext.fetchRequest()
        let deleteRequest: NSBatchDeleteRequest = NSBatchDeleteRequest(fetchRequest: fetchRequest)
        _ = try? managedContext.execute(deleteRequest)
    }
    
    func fetchTracks() -> [TrackInfo] {
        var fetchResult = [LatestUpnext]()
        var defaultTracksData = [TrackInfoData]()
        var defaultTracks = [TrackInfo]()
        let fetchRequest: NSFetchRequest = LatestUpnext.fetchRequest()
        do {
            fetchResult = try managedContext.fetch(fetchRequest)
            fetchResult.forEach { defaultTracksData.append($0.track) }
            print("FETCH RESULT : \(fetchResult.count)")
            print("DEFAULT TRACK INFO DATA : \(defaultTracksData.count)")
        } catch let error as NSError {
            print("Could not fetch. \(error), \(error.userInfo)")
            return []
        }
        print("FETCH RESULT : \(fetchResult.count)")
        print("DEFAULT TRACK INFO DATA : \(defaultTracksData.count)")
        for track in defaultTracksData {
            print(track.title)
        }
        defaultTracksData.forEach { data in
            print(data.title)
            let artist = TrackInfo.Artist(id: data.artist.id,
                                          name: data.artist.name)
            let album = TrackAlbum(id: data.album.id,
                                   title: data.album.title,
                                   imageUrl: data.album.imageUrl)
            let track = TrackInfo(id: data.id,
                                  title: data.title,
                                  lyrics: data.lyrics,
                                  albumId: data.albumId,
                                  album: album,
                                  artist: artist,
                                  liked: data.liked)
            defaultTracks.append(track)
        }
        print(defaultTracks)
        return defaultTracks
    }
    
    func tracksToViewModel(tracks: [TrackInfo]) -> [TrackViewModel] {
        var viewModelArr = [TrackViewModel]()
        tracks.forEach {
            viewModelArr.append(TrackViewModel(track: $0, eventLogger: MiniVibeApp.eventLogger))
        }
        return viewModelArr
    }
}

class AppDelegate: NSObject, UIApplicationDelegate {
    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey : Any]? = nil) -> Bool {
        let defaultTracks: [TrackInfo] = PersistenceController.shared.fetchTracks()
        let trackViewModel: [TrackViewModel] = PersistenceController.shared.tracksToViewModel(tracks: defaultTracks)
        MiniVibeApp.nowPlaying.upNext = trackViewModel
        return true
    }
}

@main
struct MiniVibeApp: App {
    @UIApplicationDelegateAdaptor(AppDelegate.self) var appDelegate
    
    static let eventLogger = EventLogger(local: nil,
                                         server: nil,
                                         reachability: ReachablilityObserver(hostName: "www.google.com"))
    static let nowPlaying = NowPlaying()

    let persistentContainer: NSPersistentContainer = {
        let container = NSPersistentContainer(name: "Event")
        container.loadPersistentStores(completionHandler: { _, _ in })
        return container
    }()
    
    var body: some Scene {
        WindowGroup {
            MainTab()
                .environmentObject(MiniVibeApp.nowPlaying)
                .onReceive(
                    NotificationCenter.default.publisher(
                        for: UIApplication.didBecomeActiveNotification)) { _ in
                    MiniVibeApp.eventLogger.send(Active(userId: 0))
                }
                .onReceive(
                    NotificationCenter.default.publisher(
                        for: UIApplication.willResignActiveNotification)) { _ in
                    PersistenceController.shared.delete()
                    let upNext = MiniVibeApp.nowPlaying.upNext
                    let tracksToSave = viewModelToTracks(viewModels: upNext)
                    saveTracks(tracks: tracksToSave)
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
    
    
    private func viewModelToTracks(viewModels: [TrackViewModel]) -> [TrackInfo] {
        var tracks = [TrackInfo]()
        viewModels.forEach { tracks.append($0.track) }
        return tracks
    }
    
    private func saveTracks(tracks: [TrackInfo]) {
        tracks.forEach { track in
            print(track.title)
            let albumData = TrackAlbumData(id: track.album.id,
                                       title: track.album.title,
                                       imageUrl: track.album.imageUrl)
            
            let artistData = ArtistData(id: track.artist.id,
                                   name: track.artist.name)
            
            let data = TrackInfoData(id: track.id,
                                     title: track.title,
                                     lyrics: track.lyrics,
                                     albumId: track.albumId!,
                                     album: albumData,
                                     artist: artistData,
                                     liked: track.id)
            
            let savedInfo = NSManagedObject(entity: PersistenceController.shared.entity,
                                            insertInto: PersistenceController.shared.managedContext)
            savedInfo.setValue(data, forKey: "track")
            do {
                try PersistenceController.shared.managedContext.save()
            } catch let error as NSError {
                print("Could not save. \(error), \(error.userInfo)")
            }
        }
        
    }
}
