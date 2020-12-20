//
//  TodayUseCase.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/07.
//

import Foundation
import Combine

protocol TodayUseCaseType {
    func loadMixtapes() -> AnyPublisher<[Mixtape], UseCaseError>
    func loadAlbums() -> AnyPublisher<[Album], UseCaseError>
    func loadPlaylists() -> AnyPublisher<[Playlist], UseCaseError>
    func loadTracks() -> AnyPublisher<[TrackInfo], UseCaseError>
    func loadMagazines() -> AnyPublisher<[Magazine], UseCaseError>
}

struct TodayUseCase: TodayUseCaseType {
    private let network: NetworkServiceType
    
    init(network: NetworkServiceType = NetworkService()) {
        self.network = network
    }
    
    func loadMixtapes() -> AnyPublisher<[Mixtape], UseCaseError> {
        return network.request(url: EndPoint.mixtapes.urlString, request: .get, body: nil)
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
        return network.request(url: EndPoint.albums.urlString, request: .get, body: nil)
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
        return network.request(url: EndPoint.playlists.urlString, request: .get, body: nil)
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
    
    func loadMagazines() -> AnyPublisher<[Magazine], UseCaseError> {
        return network.request(url: EndPoint.magazines.urlString, request: .get, body: nil)
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
