//
//  LibraryUseCase.swift
//  MiniVibeTests
//
//  Created by Sue Cho on 2020/12/17.
//

import Foundation
import Combine
@testable import MiniVibe

struct MockLibraryUseCase: LibraryUseCaseType {
    let tracks: [TrackInfo]
    
    func loadLikedTracks() -> AnyPublisher<[TrackInfo], UseCaseError> {
        Just(tracks)
            .setFailureType(to: UseCaseError.self)
            .eraseToAnyPublisher()
    }
}
