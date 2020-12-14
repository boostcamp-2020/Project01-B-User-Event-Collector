//
//  PlaylistUseCaseTests.swift
//  MiniVibeTests
//
//  Created by TTOzzi on 2020/12/14.
//

import Combine
import XCTest
@testable import MiniVibe

final class PlaylistUseCaseTests: XCTestCase {

    private var cancellables: Set<AnyCancellable> = []
    
    func tests_load_playlist_success() {
        let expectation = XCTestExpectation(description: "playlist load success test")
        defer { wait(for: [expectation], timeout: 5) }
        
        let playlist = PlaylistUseCase.PlaylistResponse(data:
                                                            .init(id: 0,
                                                                  title: "test",
                                                                  subTitle: "test",
                                                                  description: "test",
                                                                  imageUrl: "test",
                                                                  customized: false,
                                                                  tracks: [])
            )
        let data = try? JSONEncoder().encode(playlist)
        let useCase = PlaylistUseCase(network: MockSuccessNetworkService(data: data!))
        
        useCase.loadPlaylist(with: 0)
            .sink { result in
                switch result {
                case .finished:
                    expectation.fulfill()
                case let .failure(error):
                    XCTFail(error.localizedDescription)
                }
            } receiveValue: { receivedPlaylist in
                XCTAssertEqual(playlist.data, receivedPlaylist)
            }
            .store(in: &cancellables)
    }
    
    func tests_load_album_failure() {
        let expectation = XCTestExpectation(description: "album load failure test")
        defer { wait(for: [expectation], timeout: 5) }
        
        let useCase = PlaylistUseCase(network: MockFailureNetworkService())
        
        useCase.loadPlaylist(with: 0)
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
