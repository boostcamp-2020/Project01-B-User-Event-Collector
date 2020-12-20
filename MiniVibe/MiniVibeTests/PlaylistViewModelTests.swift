//
//  PlaylistViewModelTests.swift
//  MiniVibeTests
//
//  Created by TTOzzi on 2020/12/15.
//

import XCTest
import Combine
@testable import MiniVibe

final class PlaylistViewModelTests: XCTestCase {
    
    struct MockPlaylistUseCase: PlaylistUseCaseType {
        let playlist: Playlist
        
        func loadPlaylist(with id: Int) -> AnyPublisher<Playlist, UseCaseError> {
            return Just(playlist)
                .setFailureType(to: UseCaseError.self)
                .eraseToAnyPublisher()
        }
    }
    
    private let useCase = MockPlaylistUseCase(playlist: .init(id: 0,
                                                              title: "test",
                                                              subTitle: "test",
                                                              description: "test",
                                                              imageUrl: "test",
                                                              customized: true,
                                                              tracks: []))
    private var cancellables: Set<AnyCancellable> = []
    
    func test_send_appear() {
        let expectation = XCTestExpectation(description: "appear test")
        defer { wait(for: [expectation], timeout: 5) }
        
        let viewModel = PlaylistViewModel(id: 0,
                                          useCase: useCase,
                                          eventLogger: MockEventLogger())
        
        viewModel.$state
            .sink { state in
                if state.playlist == self.useCase.playlist {
                    expectation.fulfill()
                }
            }
            .store(in: &cancellables)
        
        viewModel.send(.appear)
    }
    
    func test_send_showPlaylistMenu() {
        let expectation = XCTestExpectation(description: "showPlaylistMenu test")
        defer { wait(for: [expectation], timeout: 5) }
        
        let viewModel = PlaylistViewModel(id: 0,
                                          useCase: useCase,
                                          eventLogger: MockEventLogger())
        
        viewModel.$state
            .sink { state in
                if state.showSheet,
                   state.activeSheet == .playlist {
                    expectation.fulfill()
                }
            }
            .store(in: &cancellables)
        
        viewModel.send(.showPlaylistMenu)
    }
    
    func test_send_showTrackMenu() {
        let expectation = XCTestExpectation(description: "showTrackMenu test")
        defer { wait(for: [expectation], timeout: 5) }
        
        let viewModel = PlaylistViewModel(id: 0,
                                       useCase: useCase,
                                       eventLogger: MockEventLogger())
        let trackViewModel = TrackViewModel(track: .init(id: 0,
                                                         title: "test",
                                                         lyrics: "test",
                                                         albumId: 0,
                                                         album: .init(id: 0, title: "test", imageUrl: "test"),
                                                         artist: .init(id: 0, name: "test"),
                                                         liked: 0))
        
        viewModel.$state
            .sink { state in
                if state.showSheet,
                   state.activeSheet == .track(info: trackViewModel) {
                    expectation.fulfill()
                }
            }
            .store(in: &cancellables)
        
        viewModel.send(.showTrackMenu(info: trackViewModel))
    }
    
    func test_send_like() {
        let expectation = XCTestExpectation(description: "playlist like test")
        defer { wait(for: [expectation], timeout: 5) }
        
        let eventLogger = MockEventLogger(handler: { data in
            XCTAssertEqual(data.event, "Like")
            expectation.fulfill()
        })
        
        let viewModel = PlaylistViewModel(id: 0,
                                       useCase: useCase,
                                       eventLogger: eventLogger)
        
        viewModel.send(.like)
    }
}
