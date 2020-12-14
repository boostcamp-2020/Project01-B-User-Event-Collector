//
//  AlbumUseCaseTests.swift
//  MiniVibeTests
//
//  Created by TTOzzi on 2020/12/14.
//

import XCTest
import Combine
@testable import MiniVibe

final class AlbumUseCaseTests: XCTestCase {
    
    private var cancellables: Set<AnyCancellable> = []
    
    func tests_load_album_success() {
        let expectation = XCTestExpectation(description: "album load test")
        defer { wait(for: [expectation], timeout: 5) }
        
        let album = AlbumUseCase.AlbumResponse(data:
                                                .init(id: 0,
                                                      title: "test",
                                                      description: "test",
                                                      releaseDate: "test",
                                                      artist: .init(id: 0, name: "test"),
                                                      imageUrl: "test",
                                                      tracks: [])
                                               )
        let data = try? JSONEncoder().encode(album)
        let useCase = AlbumUseCase(network: MockSuccessNetworkService(data: data!))
        
        useCase.loadAlbum(with: 0)
            .sink { result in
                switch result {
                case .finished:
                    expectation.fulfill()
                case let .failure(error):
                    XCTFail(error.localizedDescription)
                }
            } receiveValue: { receivedAlbum in
                XCTAssertEqual(album.data, receivedAlbum)
            }
            .store(in: &cancellables)
    }
    
    func tests_load_album_failure() {
        let expectation = XCTestExpectation(description: "album load test")
        defer { wait(for: [expectation], timeout: 5) }
        
        let useCase = AlbumUseCase(network: MockFailureNetworkService())
        
        useCase.loadAlbum(with: 0)
            .sink { result in
                switch result {
                case .finished:
                    XCTFail()
                case let .failure(error):
                    XCTAssertEqual(error, .decodingError)
                    expectation.fulfill()
                }
            } receiveValue: { _ in
                XCTFail()
            }
            .store(in: &cancellables)
    }
}
