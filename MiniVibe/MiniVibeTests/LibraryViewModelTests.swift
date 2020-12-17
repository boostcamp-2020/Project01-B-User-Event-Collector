//
//  LibraryViewModelTests.swift
//  MiniVibeTests
//
//  Created by Sue Cho on 2020/12/17.
//

import XCTest
import Combine
@testable import MiniVibe

final class LibraryViewModelTests: XCTestCase {
    
    private var cancellables = Set<AnyCancellable>()
    
    func test_appear() {
        let expectation = XCTestExpectation(description: "appear test")
        defer { wait(for: [expectation], timeout: 5) }
        
        let usecase = MockLibraryUseCase(tracks: [.init(id: 0,
                                                        title: "title",
                                                        lyrics: "lyrics",
                                                        albumId: 0,
                                                        album: .init(id: 0,
                                                                     title: "title",
                                                                     imageUrl: "imageUrl"),
                                                        artist: .init(id: 0,
                                                                      name: "name"),
                                                        liked: 0)])
        let viewModel = LibraryViewModel(usecase: usecase,
                                         eventLogger: MockEventLogger())
        viewModel.$state
            .sink { state in
                if state.likedTracks == usecase.tracks {
                    expectation.fulfill()
                }
            }
            .store(in: &cancellables)
        
        viewModel.send(.appear)
    }
    
    func test_menu_button_tapped() {
        let expectation = XCTestExpectation(description: "play button tapped test")
        defer { wait(for: [expectation], timeout: 5) }
        
        let usecase = MockLibraryUseCase(tracks: [.init(id: 0,
                                                        title: "title",
                                                        lyrics: "lyrics",
                                                        albumId: 0,
                                                        album: .init(id: 0,
                                                                     title: "title",
                                                                     imageUrl: "imageUrl"),
                                                        artist: .init(id: 0,
                                                                      name: "name"),
                                                        liked: 0)])
        let eventLogger = MockEventLogger { event in
            XCTAssertEqual(event.event, "Appear")
            expectation.fulfill()
        }
        let viewModel = LibraryViewModel(usecase: usecase, eventLogger: eventLogger)
        viewModel.$state
            .sink { state in
                if state.isMenuOpen {
                    expectation.fulfill()
                }
            }
            .store(in: &cancellables)
        
        viewModel.send(.tapMenuButton)
    }

}
