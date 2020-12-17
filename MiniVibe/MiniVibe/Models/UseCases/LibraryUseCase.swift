//
//  LibraryUseCase.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/17.
//

import Foundation
import Combine

protocol LibraryUseCaseType {
    func loadLikedTracks() -> AnyPublisher<[TrackInfo], UseCaseError>
}

struct LibraryUseCase: LibraryUseCaseType {
    
    private let network: NetworkServiceType
    
    init(network: NetworkServiceType = NetworkService()) {
        self.network = network
    }
    
    func loadLikedTracks() -> AnyPublisher<[TrackInfo], UseCaseError> {
        return network.request(url: EndPoint.libraryTracks.urlString, request: .get, body: nil)
            .decode(type: TrackResponse.self, decoder: JSONDecoder())
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
