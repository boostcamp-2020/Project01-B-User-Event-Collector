//
//  ChartUseCaseTests.swift
//  MiniVibeTests
//
//  Created by Sue Cho on 2020/12/16.
//

import XCTest
import Combine
@testable import MiniVibe

final class ChartUseCaseTests: XCTestCase {
    
    private var cancellables: Set<AnyCancellable> = []
    
    func test_load_tracks_success() {
        let expectation = XCTestExpectation(description: "tracks load success test")
        defer { wait(for: [expectation], timeout: 5) }
        
        let tracks = TrackResponse(data: [.init(id: 0,
                                                title: "title",
                                                lyrics: "lyrics",
                                                albumId: 0,
                                                album: .init(id: 0,
                                                             title: "title",
                                                             imageUrl: "image url"),
                                                artist: .init(id: 0,
                                                              name: "name"),
                                                liked: 0)])
        let data = try? JSONEncoder().encode(tracks)
        let usecase = ChartsUseCase(network: MockSuccessNetworkService(data: data!))
        
        usecase.loadTracks()
            .sink { result in
                switch result {
                case .finished:
                    expectation.fulfill()
                case let .failure(error):
                    XCTFail(error.localizedDescription)
                }
            } receiveValue: { receivedTracks in
                XCTAssertEqual(tracks.data, receivedTracks)
            }
            .store(in: &cancellables)
    }
    
    func test_load_tracks_failure() {
        let expectation = XCTestExpectation(description: "tracks load failure test")
        defer { wait(for: [expectation], timeout: 5) }
        
        let useCase = ChartsUseCase(network: MockFailureNetworkService())
        
        useCase.loadTracks()
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
