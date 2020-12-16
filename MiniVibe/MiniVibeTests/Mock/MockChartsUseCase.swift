//
//  MockChartsUseCase.swift
//  MiniVibeTests
//
//  Created by Sue Cho on 2020/12/16.
//

import Foundation
import Combine
@testable import MiniVibe

struct MockChartsUseCase: ChartsUseCaseType {
    let tracks: [TrackInfo]
    
    func loadTracks() -> AnyPublisher<[TrackInfo], UseCaseError> {
        return Just(tracks)
            .setFailureType(to: UseCaseError.self)
            .eraseToAnyPublisher()
    }
}
