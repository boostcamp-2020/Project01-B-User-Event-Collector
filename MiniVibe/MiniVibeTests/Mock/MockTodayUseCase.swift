//
//  MockTodayUseCase.swift
//  MiniVibeTests
//
//  Created by TTOzzi on 2020/12/14.
//

import Combine
import Foundation
@testable import MiniVibe

struct MockTodayUseCase: TodayUseCaseType {
    let mixtapes: [Mixtape]
    let albums: [Album]
    let playlists: [Playlist]
    let tracks: [TrackInfo]
    let magazines: [Magazine]
    
    func loadMixtapes() -> AnyPublisher<[Mixtape], UseCaseError> {
        return Just(mixtapes)
            .setFailureType(to: UseCaseError.self)
            .eraseToAnyPublisher()
    }
    
    func loadAlbums() -> AnyPublisher<[Album], UseCaseError> {
        return Just(albums)
            .setFailureType(to: UseCaseError.self)
            .eraseToAnyPublisher()
    }
    
    func loadPlaylists() -> AnyPublisher<[Playlist], UseCaseError> {
        return Just(playlists)
            .setFailureType(to: UseCaseError.self)
            .eraseToAnyPublisher()
    }
    
    func loadTracks() -> AnyPublisher<[TrackInfo], UseCaseError> {
        return Just(tracks)
            .setFailureType(to: UseCaseError.self)
            .eraseToAnyPublisher()
    }
    
    func loadMagazines() -> AnyPublisher<[Magazine], UseCaseError> {
        return Just(magazines)
            .setFailureType(to: UseCaseError.self)
            .eraseToAnyPublisher()
    }
}
