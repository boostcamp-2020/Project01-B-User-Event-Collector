//
//  TrackViewModelTests.swift
//  MiniVibeTests
//
//  Created by Sue Cho on 2020/12/14.
//

import XCTest
import Combine
@testable import EventLogKit
@testable import MiniVibe

class TrackViewModelTests: XCTestCase {
    
    struct MockEventLogger: EventLoggerType {
        func send(_ event: EventLogType) { }
    }

    func test_like_track() {
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
        let eventLogger = MockEventLogger()
        let viewModel = TrackViewModel(track: track,
                                       useCase: usecase,
                                       eventLogger: eventLogger)
        viewModel.send(.like)
        XCTAssertEqual(viewModel.state.track.liked, 1)
    }
    
    func test_cancel_like_track() {
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
        let eventLogger = MockEventLogger()
        let viewModel = TrackViewModel(track: track,
                                       useCase: usecase,
                                       eventLogger: eventLogger)
        viewModel.send(.cancelLike)
        XCTAssertEqual(viewModel.state.track.liked, 0)
    }

}
