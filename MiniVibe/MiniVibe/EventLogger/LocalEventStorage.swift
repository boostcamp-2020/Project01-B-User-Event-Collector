//
//  LocalEventStorage.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/14.
//

import Combine
import CoreData
import Foundation
import EventLogKit

final class LocalEventStorage: LocalStorageType {
    
    enum StorageType {
        case persistent, inMemory
    }
    
    private let container: NSPersistentContainer
    private var fetchRequests: [NSFetchRequest<NSFetchRequestResult>] {
        return [
            Transition.fetchRequest(),
            Search.fetchRequest(),
            Like.fetchRequest(),
            Subscribe.fetchRequest(),
            MoveTrack.fetchRequest(),
            Engagement.fetchRequest(),
            Play.fetchRequest(),
            UpnextChange.fetchRequest()
        ]
    }
    private let network: NetworkServiceType
    private var cancellables: Set<AnyCancellable> = []
    
    init(_ storageType: StorageType = .persistent,
         network: NetworkServiceType = NetworkService()) {
        self.network = network
        container = NSPersistentContainer(name: "Event")
        if storageType == .inMemory {
            let description = NSPersistentStoreDescription()
            description.url = URL(fileURLWithPath: "/dev/null")
            container.persistentStoreDescriptions = [description]
        }
        container.loadPersistentStores { (_, _) in
            
        }
    }
    
    func save(_ event: EventLogType) {
        event.save(context: container.viewContext)
    }
    
    func reset() {
        delete(requests: fetchRequests)
    }
    
    func events() -> [EventPrintable] {
        return fetchRequests.compactMap {
            return try? container.viewContext.fetch($0) as? [EventPrintable]
        }
        .flatMap { $0 }
        .sorted { $0.timestamp > $1.timestamp }
    }
    
    func sendToServer() {
        let moveTrackRequest: NSFetchRequest<NSFetchRequestResult> = MoveTrack.fetchRequest()
        let moveTrack = try? container.viewContext.fetch(moveTrackRequest) as? [MoveTrack]
        send(logs: moveTrack, isPlayEvent: true, fetchRequest: moveTrackRequest)
        
        let playRequest: NSFetchRequest<NSFetchRequestResult> = Play.fetchRequest()
        let play = try? container.viewContext.fetch(playRequest) as? [Play]
        send(logs: play, isPlayEvent: true, fetchRequest: playRequest)
        
        let upnextChangeRequest: NSFetchRequest<NSFetchRequestResult> = UpnextChange.fetchRequest()
        let upnextChange = try? container.viewContext.fetch(upnextChangeRequest) as? [UpnextChange]
        send(logs: upnextChange, isPlayEvent: true, fetchRequest: upnextChangeRequest)
        
        let transitionRequest: NSFetchRequest<NSFetchRequestResult> = Transition.fetchRequest()
        let transition = try? container.viewContext.fetch(transitionRequest) as? [Transition]
        send(logs: transition, isPlayEvent: false, fetchRequest: transitionRequest)
        
        let engagementRequest: NSFetchRequest<NSFetchRequestResult> = Engagement.fetchRequest()
        let engagement = try? container.viewContext.fetch(engagementRequest) as? [Engagement]
        send(logs: engagement, isPlayEvent: false, fetchRequest: engagementRequest)
        
        let searchRequest: NSFetchRequest<NSFetchRequestResult> = Search.fetchRequest()
        let search = try? container.viewContext.fetch(searchRequest) as? [Search]
        send(logs: search, isPlayEvent: false, fetchRequest: searchRequest)
        
        let likeRequest: NSFetchRequest<NSFetchRequestResult> = Like.fetchRequest()
        let like = try? container.viewContext.fetch(likeRequest) as? [Like]
        send(logs: like, isPlayEvent: false, fetchRequest: likeRequest)
        
        let subscribeRequest: NSFetchRequest<NSFetchRequestResult> = Subscribe.fetchRequest()
        let subscribe = try? container.viewContext.fetch(subscribeRequest) as? [Subscribe]
        send(logs: subscribe, isPlayEvent: false, fetchRequest: subscribeRequest)
    }
    
    private func send<T: Encodable>(logs: [T]?,
                                    isPlayEvent: Bool,
                                    fetchRequest: NSFetchRequest<NSFetchRequestResult>) {
        let url = isPlayEvent ? EndPoint.playEvents.urlString : EndPoint.events.urlString
        guard let logs = logs,
              let data = try? JSONEncoder().encode(logs) else { return }
        
        network.request(url: url, request: .post, body: data)
            .decode(type: ServerResponse.self, decoder: JSONDecoder())
            .map(\.success)
            .sink { result in
                switch result {
                case .finished:
                    break
                case .failure:
                    break
                }
            } receiveValue: { [weak self] isSuccess in
                if isSuccess {
                    self?.delete(requests: [fetchRequest])
                }
            }
            .store(in: &cancellables)
    }
    
    private func delete(requests: [NSFetchRequest<NSFetchRequestResult>]) {
        let deleteRequests = requests.map { NSBatchDeleteRequest(fetchRequest: $0) }
        
        deleteRequests.forEach {
            _ = try? container.viewContext.execute($0)
        }
    }
}
