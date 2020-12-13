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
 
    var playingTrack: TrackViewModel? {
        return upNext.first
    }
    let usecase = TrackUseCase()
    var cancellables = Set<AnyCancellable>()
    let userPersistentContainer: NSPersistentContainer = {
        let container = NSPersistentContainer(name: "User")
        container.loadPersistentStores { (_, _) in
            
        }
        return container
    }()
    let managedContext: NSManagedObjectContext!
    let entity: NSEntityDescription!
    
    init() {
        managedContext = userPersistentContainer.viewContext
        entity = NSEntityDescription.entity(forEntityName: "LatestUpnext",
                                            in: managedContext)
        fetchTracks()
    }
    
    func addTrack(track: TrackViewModel) {
        isPlaying = true
        if let index = upNext.firstIndex(of: track) {
            upNext.insert(upNext.remove(at: index), at: 0)
        } else {
            upNext.insert(track, at: 0)
        }
        let trackInfo = NSManagedObject(entity: entity, insertInto: managedContext)
        trackInfo.setValue(track.track.id, forKey: "trackId")
        do {
            try managedContext.save()
        } catch let error as NSError {
            print("Could not save. \(error), \(error.userInfo)")
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
    
    private func fetchTracks() {
        let fetchRequest = NSFetchRequest<NSManagedObject>(entityName: "LatestUpnext")
        var trackIds = [NSManagedObject]()
        var tracks = [TrackInfo]()
        do {
            trackIds = try managedContext.fetch(fetchRequest)
        } catch let error as NSError {
            print("Could not fetch. \(error), \(error.userInfo)")
        }
        
        trackIds.forEach { id in
            guard let trackId = id.value(forKey: "trackId") as? Int else { return }
            usecase.loadTrack(id: trackId)
                .sink(receiveCompletion: { (result) in
                    switch result {
                    case .finished:
                        print("finished")
                    
                    case .failure(.networkError):
                        print("network error")
                    default:
                        print("unknown error")
                    }
                }, receiveValue: { info in
                    tracks.append(info)
                    print(info)
                })
                .store(in: &cancellables)
        }
        tracks.forEach { [self] track in
            let viewModel = TrackViewModel(track: track, eventLogger: MiniVibeApp.eventLogger)
            self.upNext.append(viewModel)
        }
    }

}
