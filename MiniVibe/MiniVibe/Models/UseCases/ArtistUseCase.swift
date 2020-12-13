//
//  ArtistUseCase.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/09.
//

import Foundation
import Combine

protocol ArtistUseCaseType {
    func loadArtists() -> AnyPublisher<[Artist], UseCaseError>
    func loadArtist(with id: Int) -> AnyPublisher<ArtistInfo, UseCaseError>
}

struct ArtistUseCase: ArtistUseCaseType {
    struct ArtistResponse: Decodable {
        let data: ArtistInfo
    }
    
    private let network: NetworkServiceType
    
    init(network: NetworkServiceType = NetworkService()) {
        self.network = network
    }
    
    func loadArtists() -> AnyPublisher<[Artist], UseCaseError> {
        return network.request(url: EndPoint.artists.urlString, request: .get, body: nil)
            .decode(type: Artists.self, decoder: JSONDecoder())
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
    
    func loadArtist(with id: Int) -> AnyPublisher<ArtistInfo, UseCaseError> {
        return network.request(url: EndPoint.artist(id: id).urlString, request: .get, body: nil)
            .decode(type: ArtistResponse.self, decoder: JSONDecoder())
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
