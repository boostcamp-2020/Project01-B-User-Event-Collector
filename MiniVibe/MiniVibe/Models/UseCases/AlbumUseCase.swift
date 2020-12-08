//
//  AlbumUseCase.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/07.
//

import Combine
import Foundation

struct AlbumUseCase {
    struct AlbumResponse: Decodable {
        let data: Album
    }
    
    private let network: NetworkServiceType
    
    init(network: NetworkServiceType = NetworkService()) {
        self.network = network
    }
    
    func loadAlbum(with id: Int) -> AnyPublisher<Album, UseCaseError> {
        return network.request(url: EndPoint.album(id: id).urlString)
            .decode(type: AlbumResponse.self, decoder: JSONDecoder())
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
