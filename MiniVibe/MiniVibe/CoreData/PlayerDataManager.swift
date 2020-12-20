//
//  PlayerDataManager.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/15.
//

import CoreData
import Foundation

protocol PlayerDataManagerType {
    func fetch() -> [TrackViewModel]
    func saveTracks(tracks: [TrackViewModel])
}

final class PlayerDataManager: PlayerDataManagerType {
    private let container: NSPersistentContainer
    private let managedContext: NSManagedObjectContext
    private let entity: NSEntityDescription
    
    init() {
        container = NSPersistentContainer(name: "User")
        container.loadPersistentStores { (_, error) in
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
    
    func fetch() -> [TrackViewModel] {
        let fetchRequest: NSFetchRequest = LatestUpnext.fetchRequest()
        var fetchedTracks = [TrackInfo]()
        do {
            fetchedTracks = try managedContext.fetch(fetchRequest).first?.track.map { data -> TrackInfo in
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
                return track
            } ?? []
        } catch let error as NSError {
            print("Could not fetch. \(error), \(error.userInfo)")
            return []
        }
        return fetchedTracks
            .map { TrackViewModel(track: $0, eventLogger: MiniVibeApp.eventLogger)}
    }
    
    func saveTracks(tracks: [TrackViewModel]) {
        delete()
        let data = tracks.map { viewModel -> TrackInfoData in
            let track = viewModel.state.track
            let albumData = TrackAlbumData(id: track.album.id,
                                           title: track.album.title,
                                           imageUrl: track.album.imageUrl)
            let artistData = ArtistData(id: track.artist.id,
                                        name: track.artist.name)
            return TrackInfoData(id: track.id,
                                 title: track.title,
                                 lyrics: track.lyrics,
                                 albumId: track.album.id,
                                 album: albumData,
                                 artist: artistData,
                                 liked: track.liked)
            
        }
        let savedInfo = NSManagedObject(entity: entity,
                                        insertInto: managedContext)
        savedInfo.setValue(data, forKey: "track")
        do {
            try managedContext.save()
        } catch let error as NSError {
            print("Could not save. \(error), \(error.userInfo)")
        }
    }
}
