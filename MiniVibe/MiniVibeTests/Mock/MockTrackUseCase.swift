//
//  MockTrackUseCase.swift
//  MiniVibeTests
//
//  Created by Sue Cho on 2020/12/14.
//

import Foundation
import Combine
@testable import MiniVibe

struct MockTrackUseCase: TrackUseCaseType {
    let track: TrackInfo
    
    func loadTrack(id: Int) -> AnyPublisher<TrackInfo, UseCaseError> {
        Just(track)
            .setFailureType(to: UseCaseError.self)
            .eraseToAnyPublisher()
    }

    let success = true
    func likeTrack(id: Int) -> AnyPublisher<Bool, UseCaseError> {
        Just(success)
            .setFailureType(to: UseCaseError.self)
            .eraseToAnyPublisher()
    }

    func cancelLikedTrack(id: Int) -> AnyPublisher<Bool, UseCaseError> {
        Just(success)
            .setFailureType(to: UseCaseError.self)
            .eraseToAnyPublisher()
    }
}
