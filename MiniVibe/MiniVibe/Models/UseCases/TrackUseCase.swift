//
//  TrackUseCase.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/10.
//

import Foundation
import Combine

struct LikeTrack: Encodable {
    let trackId: Int
}

struct LikeTrackResponse: Decodable {
    let success: Bool
}

struct TrackUseCase {
    private let network: NetworkServiceType
    
    init(network: NetworkServiceType = NetworkService()) {
        self.network = network
    }
    
    func likeTrack(like: LikeTrack) -> AnyPublisher<Bool, UseCaseError> {
        // #1 : Just로 트랙을 방출시키고 encode 하고 플랫맵으로 network 퍼블리셔로 매핑 (stream으로 이어짐)
        // #2 : Encode
        guard let data = try? JSONEncoder().encode(like) else {
            return Fail(error: UseCaseError.encodingError)
                .eraseToAnyPublisher()
        }
        return network.request(url: EndPoint.like.urlString, request: .post, body: data)
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
