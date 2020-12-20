//
//  TrackViewModelTests.swift
//  MiniVibeTests
//
//  Created by Sue Cho on 2020/12/14.
//

import XCTest
import Combine
@testable import MiniVibe

final class TrackViewModelTests: XCTestCase {
    
    private var cancellables = Set<AnyCancellable>()
    
    func test_like_track() {
        let expectation = XCTestExpectation(description: "Like track test")
        expectation.expectedFulfillmentCount = 2
        defer { wait(for: [expectation], timeout: 5) }
        
        let track = TrackInfo(id: 0,
                              title: "",
                              lyrics: "",
                              albumId: 0,
                              album: .init(id: 0,
                                           title: "",
                                           imageUrl: ""),
                              artist: .init(id: 0, name: ""),
                              liked: 0)
        let usecase = MockTrackUseCase(track: track)
        let eventLogger = MockEventLogger { data in
            XCTAssertEqual(data.event, "Like")
            expectation.fulfill()
        }
        
        let viewModel = TrackViewModel(track: track,
                                       useCase: usecase,
                                       eventLogger: eventLogger)
        viewModel.$state
            .sink { state in
                if state.track.liked == 1 {
                    expectation.fulfill()
                }
            }
            .store(in: &cancellables)
        
        viewModel.send(.like)
    }
    
    func test_cancel_like_track() {
        let expectation = XCTestExpectation(description: "Cancel Like track test")
        expectation.expectedFulfillmentCount = 2
        defer { wait(for: [expectation], timeout: 5) }
        
        let track = TrackInfo(id: 0,
                              title: "",
                              lyrics: "",
                              albumId: 0,
                              album: .init(id: 0,
                                           title: "",
                                           imageUrl: ""),
                              artist: .init(id: 0, name: ""),
                              liked: 1)
        let usecase = MockTrackUseCase(track: track)
        let eventLogger = MockEventLogger { data in
            XCTAssertEqual(data.event, "Like")
            expectation.fulfill()
        }
        let viewModel = TrackViewModel(track: track,
                                       useCase: usecase,
                                       eventLogger: eventLogger)
        viewModel.$state
            .sink { state in
                if state.track.liked == 0 {
                    expectation.fulfill()
                }
            }
            .store(in: &cancellables)
        
        viewModel.send(.like)
    }

}
