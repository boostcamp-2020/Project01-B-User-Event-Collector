//
//  ChartsUseCase.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/16.
//

import Foundation
import Combine

protocol ChartsUseCaseType {
    func loadTracks() -> AnyPublisher<[TrackInfo], UseCaseError>
}

struct ChartsUseCase: ChartsUseCaseType {
    
    private let network: NetworkServiceType
    
    init(network: NetworkServiceType = NetworkService()) {
        self.network = network
    }
    
    func loadTracks() -> AnyPublisher<[TrackInfo], UseCaseError> {
        return network.request(url: EndPoint.tracks.urlString, request: .get, body: nil)
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
