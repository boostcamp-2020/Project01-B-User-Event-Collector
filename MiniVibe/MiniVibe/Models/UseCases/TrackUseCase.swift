//
//  TrackUseCase.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/10.
//

import Foundation
import Combine

protocol TrackUseCaseType {
    func likeTrack(id: Int) -> AnyPublisher<Bool, UseCaseError>
    func cancelLikedTrack(id: Int) -> AnyPublisher<Bool, UseCaseError>
}

struct TrackUseCase: TrackUseCaseType {
    struct LikeTrack: Encodable {
        let trackId: Int
    }

    struct LikeTrackResponse: Decodable {
        let success: Bool
    }
    
    private let network: NetworkServiceType
    
    init(network: NetworkServiceType = NetworkService()) {
        self.network = network
    }
    
    func likeTrack(id: Int) -> AnyPublisher<Bool, UseCaseError> {
        return Just(LikeTrack(trackId: id))
            .encode(encoder: JSONEncoder())
            .flatMap { data in
                return network.request(url: EndPoint.like.urlString, request: .post, body: data)
                    .mapError { $0 }
            }
            .decode(type: LikeTrackResponse.self, decoder: JSONDecoder())
            .mapError { error -> UseCaseError in
                switch error {
                case is NetworkError:
                    return .networkError
                case is DecodingError:
                    return .decodingError
                case is EncodingError:
                    return .encodingError
                default:
                    return .unknownError
                }
            }
            .map(\.success)
            .receive(on: DispatchQueue.main)
            .eraseToAnyPublisher()
    }
    
    func cancelLikedTrack(id: Int) -> AnyPublisher<Bool, UseCaseError> {
        return network.request(url: EndPoint.cancelLike(id: id).urlString, request: .delete, body: nil)
            .decode(type: LikeTrackResponse.self, decoder: JSONDecoder())
            .mapError { error -> UseCaseError in
                switch error {
                case is NetworkError:
                    return .networkError
                default:
                    return .decodingError
                }
            }
            .map(\.success)
            .receive(on: DispatchQueue.main)
            .eraseToAnyPublisher()
    }
}
