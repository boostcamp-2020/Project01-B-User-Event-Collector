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
    private var cancellable = Set<AnyCancellable>()
    
    init(network: NetworkServiceType = NetworkService()) {
        self.network = network
    }
    
    func send<T: EventLogType>(_ event: T) {
   
        var url = EndPoint.events.urlString
        let encoder = JSONEncoder()
        guard let encodedData = try? encoder.encode(event) else { return }
        
        switch event {
        case is PlayLog,
             is AddToUpnext,
             is RemoveFromUpnext,
             is MoveTrackLog:
            url = EndPoint.playEvents.urlString

        default:
            url = EndPoint.events.urlString
        }
        
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
            .sink(receiveCompletion: { _ in
                
            }, receiveValue: { response in
                // if response == false,
                    // save in core data
            })
            .store(in: &cancellable)
    }
}
