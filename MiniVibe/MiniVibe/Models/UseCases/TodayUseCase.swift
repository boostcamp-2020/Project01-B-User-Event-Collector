//
//  TodayUseCase.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/07.
//

import Foundation
import Combine

enum UseCaseError: Error {
    case networkError
    case decodingError
}

struct TodayUseCase {
    private let network: NetworkServiceType
    
    init(network: NetworkServiceType = NetworkService()) {
        self.network = network
    }
    
    func loadAlbums() -> AnyPublisher<[Album], UseCaseError> {
        return network.request(url: EndPoint.albums)
            .decode(type: Albums.self, decoder: JSONDecoder())
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
