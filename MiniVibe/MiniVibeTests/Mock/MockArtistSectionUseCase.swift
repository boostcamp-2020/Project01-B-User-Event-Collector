//
//  MockArtistSectionUseCase.swift
//  MiniVibeTests
//
//  Created by Sue Cho on 2020/12/14.
//

import XCTest
import Combine
@testable import MiniVibe

struct MockArtistSectionUseCase: ArtistUseCaseType {
    let artists: [Artist]
    let artistInfo: ArtistInfo
    
    func loadArtists() -> AnyPublisher<[Artist], UseCaseError> {
        return Just(artists)
            .setFailureType(to: UseCaseError.self)
            .eraseToAnyPublisher()
    }
    
    func loadArtist(with id: Int) -> AnyPublisher<ArtistInfo, UseCaseError> {
        return Just(artistInfo)
            .setFailureType(to: UseCaseError.self)
            .eraseToAnyPublisher()
    }
}

