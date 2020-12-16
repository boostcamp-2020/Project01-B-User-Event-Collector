//
//  NowPlayingViewModelTests.swift
//  MiniVibeTests
//
//  Created by TTOzzi on 2020/12/16.
//

import XCTest
import Combine
@testable import MiniVibe

final class NowPlayingViewModelTests: XCTestCase {
    
    private let tracks = [
        TrackViewModel(track: TrackInfo(id: 0,
                                        title: "test",
                                        lyrics: "test",
                                        albumId: 0,
                                        album: .init(id: 0, title: "test", imageUrl: "test"),
                                        artist: .init(id: 0, name: "test"),
                                        liked: 0)),
        TrackViewModel(track: TrackInfo(id: 1,
                                        title: "test",
                                        lyrics: "test",
                                        albumId: 1,
                                        album: .init(id: 1, title: "test", imageUrl: "test"),
                                        artist: .init(id: 1, name: "test"),
                                        liked: 0))
    ]
    private var cancellables: Set<AnyCancellable> = []
    
    func test_send_launch() {
        let expectation = XCTestExpectation(description: "launch test")
        defer { wait(for: [expectation], timeout: 5) }
        
        let dataManager = MockPlayerDataManager(data: tracks)
        let viewModel = NowPlayingViewModel(dataManager: dataManager,
                                            eventLogger: MockEventLogger())
        
        viewModel.$state
            .sink { state in
                if state.upNext == dataManager.data {
                    expectation.fulfill()
                }
            }
            .store(in: &cancellables)
        viewModel.send(.launch)
    }
    
    func test_send_resign_active() {
        let expectation = XCTestExpectation(description: "resign active test")
        defer { wait(for: [expectation], timeout: 5) }
        
        let dataManager = MockPlayerDataManager(data: tracks, saveHandler: { savedData in
            XCTAssertEqual(savedData, self.tracks)
            expectation.fulfill()
        })
        let viewModel = NowPlayingViewModel(dataManager: dataManager,
                                            eventLogger: MockEventLogger())
        viewModel.state.upNext = tracks
        
        viewModel.send(.resignActive)
    }
    
    func test_send_play_button_tapped() {
        let expectation = XCTestExpectation(description: "play button tapped test")
        expectation.expectedFulfillmentCount = 6
        defer { wait(for: [expectation], timeout: 5) }
        
        let dataManager = MockPlayerDataManager(data: tracks)
        let eventLogger = MockEventLogger(handler: { data in
            XCTAssertEqual(data.event, "Play")
            expectation.fulfill()
        })
        let viewModel = NowPlayingViewModel(dataManager: dataManager,
                                            eventLogger: eventLogger)
        viewModel.state.upNext = tracks
        
        var tappedCount = 0
        viewModel.$state
            .sink { state in
                if (tappedCount % 2 == 1) == state.isPlaying {
                    expectation.fulfill()
                }
            }
            .store(in: &cancellables)
        
        // play - true
        tappedCount += 1
        viewModel.send(.playButtonTapped)
        // pause - false
        tappedCount += 1
        viewModel.send(.playButtonTapped)
        // play - true
        tappedCount += 1
        viewModel.send(.playButtonTapped)
    }
    
    func test_send_play_next() {
        let expectation = XCTestExpectation(description: "play next test")
        defer { wait(for: [expectation], timeout: 5) }
        
        let dataManager = MockPlayerDataManager(data: tracks)
        let viewModel = NowPlayingViewModel(dataManager: dataManager,
                                            eventLogger: MockEventLogger())
        viewModel.state.upNext = tracks
        
        viewModel.$state
            .sink { state in
                if state.isPlaying,
                   state.upNext.first == self.tracks[1] {
                    expectation.fulfill()
                }
            }
            .store(in: &cancellables)
        
        viewModel.send(.playNext)
    }
    
    func test_send_add() {
        let expectation = XCTestExpectation(description: "add track test")
        expectation.expectedFulfillmentCount = 2
        defer { wait(for: [expectation], timeout: 5) }
        
        let dataManager = MockPlayerDataManager(data: tracks)
        let eventLogger = MockEventLogger(handler: { data in
            let event = data as? AddToUpnext
            if event?.trackId == [self.tracks[0].state.track.id] {
                expectation.fulfill()
            }
        })
        let viewModel = NowPlayingViewModel(dataManager: dataManager,
                                            eventLogger: eventLogger)
        let track = tracks[0]
        
        viewModel.$state
            .sink { state in
                if state.upNext == [track] {
                    expectation.fulfill()
                }
            }
            .store(in: &cancellables)
        
        viewModel.send(.add(track: track))
    }
    
    func test_send_delect_select_rows() {
        let expectation = XCTestExpectation(description: "delete select rows test")
        expectation.expectedFulfillmentCount = 3
        defer { wait(for: [expectation], timeout: 5) }
        
        let dataManager = MockPlayerDataManager(data: tracks)
        let eventLogger = MockEventLogger(handler: { data in
            let event = data as? RemoveFromUpnext
            if event?.trackId == [self.tracks[0].state.track.id] {
                expectation.fulfill()
            }
        })
        let viewModel = NowPlayingViewModel(dataManager: dataManager,
                                            eventLogger: eventLogger)
        viewModel.state.upNext = tracks
        
        viewModel.$state
            .sink { state in
                if state.upNext == [self.tracks[1]] {
                    expectation.fulfill()
                }
            }
            .store(in: &cancellables)
        
        viewModel.state.selectedTracks = [tracks[0]]
        viewModel.send(.deleteSelectedTracks)
    }
    
    func test_send_toggle_player() {
        let expectation = XCTestExpectation(description: "toggle player test")
        defer { wait(for: [expectation], timeout: 5) }
        
        let dataManager = MockPlayerDataManager(data: tracks)
        let viewModel = NowPlayingViewModel(dataManager: dataManager,
                                            eventLogger: MockEventLogger())
        
        var tappedCount = 0
        viewModel.$state
            .sink { state in
                if (tappedCount % 2 == 1) == state.isPlayerPresented {
                    expectation.fulfill()
                }
            }
            .store(in: &cancellables)
        
        // present - true
        tappedCount += 1
        viewModel.send(.togglePlayer)
        // dismiss - false
        tappedCount += 1
        viewModel.send(.togglePlayer)
        // present - true
        tappedCount += 1
        viewModel.send(.togglePlayer)
    }
    
    func test_send_select_button_tapped() {
        let expectation = XCTestExpectation(description: "select button tapped test")
        expectation.expectedFulfillmentCount = 3
        defer { wait(for: [expectation], timeout: 5) }
        
        let dataManager = MockPlayerDataManager(data: tracks)
        let viewModel = NowPlayingViewModel(dataManager: dataManager,
                                            eventLogger: MockEventLogger())
        viewModel.state.upNext = tracks
        
        var tappedCount = 0
        viewModel.$state
            .sink { state in
                print(state.selectedTracks, self.tracks)
                if tappedCount % 2 == 1 {
                    XCTAssertEqual(state.selectedTracks, Set(self.tracks))
                    expectation.fulfill()
                } else {
                    XCTAssertEqual(state.selectedTracks, [])
                    expectation.fulfill()
                }
            }
            .store(in: &cancellables)
        
        // selectAll
        tappedCount += 1
        viewModel.send(.selectButtonTapped)
        // deselectAll
        tappedCount += 1
        viewModel.send(.selectButtonTapped)
        // selectAll
        tappedCount += 1
        viewModel.send(.selectButtonTapped)
    }
    
    func test_send_move_track() {
        let expectation = XCTestExpectation(description: "move track test")
        expectation.expectedFulfillmentCount = 2
        defer { wait(for: [expectation], timeout: 5) }
        
        let dataManager = MockPlayerDataManager(data: tracks)
        let eventLogger = MockEventLogger(handler: { data in
            if data.event == "MoveTrack" {
                expectation.fulfill()
            }
        })
        let viewModel = NowPlayingViewModel(dataManager: dataManager,
                                            eventLogger: eventLogger)
        viewModel.state.upNext = tracks
        
        viewModel.$state
            .sink { state in
                if state.upNext == [self.tracks[1], self.tracks[0]] {
                    expectation.fulfill()
                }
            }
            .store(in: &cancellables)
        
        viewModel.send(.moveTrack(source: IndexSet(integer: 0), destination: 2))
    }
}
