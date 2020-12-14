//
//  NowPlaying.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/08.
//

import Foundation
import Combine
import CoreData

final class NowPlaying: ObservableObject {
    @Published var isPlaying: Bool = false
    @Published var isPlayerPresented: Bool = false
    @Published var upNext = [TrackViewModel]()
    @Published var selectedTracks = Set<TrackViewModel>()
    let dataManager = PlayerDataManager()
 
    var playingTrack: TrackViewModel? {
        return upNext.first
    }
    let usecase = TrackUseCase()
    var cancellables = Set<AnyCancellable>()
    
    func addTrack(track: TrackViewModel) {
        isPlaying = true
        if let index = upNext.firstIndex(of: track) {
            upNext.insert(upNext.remove(at: index), at: 0)
        } else {
            upNext.insert(track, at: 0)
        }
    }
    
    func deleteTrack() {
        selectedTracks.forEach { track in
            guard let index = upNext.firstIndex(of: track) else {
                selectedTracks.removeAll()
                return
            }
            upNext.remove(at: index)
        }
    }
    
    func playNextTrack() {
        isPlaying = true
        upNext.insert(upNext.remove(at: 0), at: upNext.count)
    }
    
}

final class PlayerDataManager {
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
    
    func fetch() -> [TrackInfo] {
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
    }
    
    func tracksToViewModel(tracks: [TrackInfo]) -> [TrackViewModel] {
        return tracks.map { TrackViewModel(track: $0,
                                           eventLogger: MiniVibeApp.eventLogger)}
    }
    
    func viewModelToTracks(viewModel: [TrackViewModel]) -> [TrackInfo] {
        return viewModel.map { $0.state.track }
    }
    
    func saveTracks(tracks: [TrackInfo]) {
        let data = tracks.map { track -> TrackInfoData in
            let albumData = TrackAlbumData(id: track.album.id,
                                       title: track.album.title,
                                       imageUrl: track.album.imageUrl)

            let artistData = ArtistData(id: track.artist.id,
                                   name: track.artist.name)
            return TrackInfoData(id: track.id,
                                     title: track.title,
                                     lyrics: track.lyrics,
                                     albumId: track.albumId!,
                                     album: albumData,
                                     artist: artistData,
                                     liked: track.id)

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
