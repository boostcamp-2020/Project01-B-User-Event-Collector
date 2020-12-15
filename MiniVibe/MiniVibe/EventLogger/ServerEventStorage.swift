//
//  ServerEventStorage.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/15.
//

import Combine
import Foundation
import EventLogKit

struct ServerResponse: Decodable {
    let success: Bool
    let message: String?
}

final class ServerEventStorage: ServerStorageType {
    private let network: NetworkServiceType
    private let local: LocalStorageType
    private var cancellable = Set<AnyCancellable>()
    
    init(network: NetworkServiceType = NetworkService(),
         local: LocalStorageType = LocalEventStorage(.persistent)) {
        self.network = network
        self.local = local
    }
    
    func send<T: EventLogType>(_ event: T) {
        guard let encodedData = try? JSONEncoder().encode(event) else { return }
        let url = eventEndPoint(event: event)
        
        network.request(url: url, request: .post, body: encodedData)
            .decode(type: ServerResponse.self, decoder: JSONDecoder())
            .mapError { error -> UseCaseError in
                switch error {
                case is NetworkError:
                    return .networkError
                case is DecodingError:
                    return .decodingError
                default:
                    return .unknownError
                }
            }
            .map(\.success)
            .eraseToAnyPublisher()
            .sink(receiveCompletion: { [weak self] result in
                switch result {
                case .finished:
                    break
                case .failure(_):
                    self?.local.save(event)
                }
            }, receiveValue: { [weak self] success in
                if !success {
                    self?.local.save(event)
                }
            })
            .store(in: &cancellable)
    }
    
    private func eventEndPoint(event: EventLogType) -> String {
        switch event {
        case is PlayLog,
             is AddToUpnext,
             is RemoveFromUpnext,
             is MoveTrackLog:
            return EndPoint.playEvents.urlString

        default:
            return EndPoint.events.urlString
        }
    }
}
