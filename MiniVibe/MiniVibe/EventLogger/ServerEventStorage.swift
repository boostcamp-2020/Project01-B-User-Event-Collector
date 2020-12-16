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
    private var failureHandler: ((EventLogType) -> Void)?
    private var cancellable = Set<AnyCancellable>()
    
    init(network: NetworkServiceType = NetworkService()) {
        self.network = network
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
                case .failure:
                    self?.failureHandler?(event)
                }
            }, receiveValue: { [weak self] success in
                if !success {
                    self?.failureHandler?(event)
                }
            })
            .store(in: &cancellable)
    }
    
    func setFailureHandler(_ handler: @escaping (EventLogType) -> Void) {
        self.failureHandler = handler
    }
    
    private func eventEndPoint(event: EventLogType) -> String {
        switch event {
        case is PlayLog,
             is AddToUpnext,
             is RemoveFromUpnext,
             is MoveTrackLog,
             is Save:
            return EndPoint.playEvents.urlString

        default:
            return EndPoint.events.urlString
        }
    }
}
