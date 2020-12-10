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
    
    func loadMixtapes() -> AnyPublisher<[Mixtape], UseCaseError> {
        return network.request(url: EndPoint.mixtapes.urlString)
            .decode(type: Mixtapes.self, decoder: JSONDecoder())
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
    
    func loadAlbums() -> AnyPublisher<[Album], UseCaseError> {
        return network.request(url: EndPoint.albums.urlString)
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
    
    func loadPlaylists() -> AnyPublisher<[Playlist], UseCaseError> {
        return network.request(url: EndPoint.playlists.urlString)
            .decode(type: Playlists.self, decoder: JSONDecoder())
            .mapError { error -> UseCaseError in
                switch error {
                case is NetworkError:
                    return .networkError
                default:
                    return .decodingError
                }
            }
            .map({ playlist -> [Playlist] in
                playlist.data.filter { !($0.customized ?? false) }
            })
            .receive(on: DispatchQueue.main)
            .eraseToAnyPublisher()
    }
    
    func loadTracks() -> AnyPublisher<[TrackInfo], UseCaseError> {
        return network.request(url: EndPoint.tracks.urlString)
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
    
    func loadMagazines() -> AnyPublisher<[Magazine], UseCaseError> {
        return network.request(url: EndPoint.magazines.urlString)
            .decode(type: Magazines.self, decoder: JSONDecoder())
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
