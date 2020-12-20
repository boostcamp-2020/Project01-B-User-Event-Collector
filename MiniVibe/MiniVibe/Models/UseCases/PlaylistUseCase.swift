//
//  PlaylistUseCase.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/07.
//

import Combine
import Foundation

protocol PlaylistUseCaseType {
    func loadPlaylist(with id: Int) -> AnyPublisher<Playlist, UseCaseError>
}

struct PlaylistUseCase: PlaylistUseCaseType {
    struct PlaylistResponse: Decodable {
        let data: Playlist
    }
    
    private let network: NetworkServiceType
    
    init(network: NetworkServiceType = NetworkService()) {
        self.network = network
    }
    
    func loadPlaylist(with id: Int) -> AnyPublisher<Playlist, UseCaseError> {
        return network.request(url: EndPoint.playlist(id: id).urlString, request: .get, body: nil)
            .decode(type: PlaylistResponse.self, decoder: JSONDecoder())
            .mapError { error -> UseCaseError in
                switch error {
                case is NetworkError:
                    return .networkError
                default:
                    return .decodingError
                }
            }
            .map(\.data)
            .receive(on: DispatchQueue.main)
            .eraseToAnyPublisher()
    }
}
