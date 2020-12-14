//
//  MockAlbumUseCase.swift
//  MiniVibeTests
//
//  Created by TTOzzi on 2020/12/14.
//

import Combine
import Foundation
@testable import MiniVibe

struct MockAlbumUseCase: AlbumUseCaseType {
    let album: Album
    
    func loadAlbum(with id: Int) -> AnyPublisher<Album, UseCaseError> {
        return Just(album)
            .setFailureType(to: UseCaseError.self)
            .eraseToAnyPublisher()
    }
}
