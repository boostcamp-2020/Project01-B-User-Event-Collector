//
//  ArtistViewModelTests.swift
//  MiniVibeTests
//
//  Created by Sue Cho on 2020/12/15.
//

import XCTest
import Combine
@testable import MiniVibe

final class ArtistViewModelTests: XCTestCase {
    
    private var cancellable: Set<AnyCancellable> = []
    
    func test_appear_artist() {
        let expectation = XCTestExpectation(description: "test load artist")
        defer { wait(for: [expectation], timeout: 5) }
        
        let artists: [Artist] = [.init(id: 0, name: "", imageUrl: "", genre: .init(name: ""))]
        let artistInfo: ArtistInfo = .init(id: 0,
                                           name: "",
                                           imageUrl: "",
                                           genre: .init(name: ""),
                                           tracks: [.init(id: 0,
                                                          title: "",
                                                          lyrics: "",
                                                          albumId: 0,
                                                          album: .init(id: 0, title: "", imageUrl: ""),
                                                          artist: .init(id: 0, name: ""),
                                                          liked: 0)],
                                           albums: [.init(id: 0, title: "", imageUrl: "")])
        
        let usecase = MockArtistUseCase(artists: artists, artistInfo: artistInfo)
        let viewModel = ArtistViewModel(useCase: usecase)
        viewModel.$state
            .sink { state in
                if state.artist == usecase.artistInfo {
                    expectation.fulfill()
                }
            }
            .store(in: &cancellable)
        
        viewModel.send(.appear(artistID: artistInfo.id))
    }
    
    func test_show_artist_menu() {
        let expectation = XCTestExpectation(description: "test load artist")
        defer { wait(for: [expectation], timeout: 5) }
        
        let artists: [Artist] = [.init(id: 0, name: "", imageUrl: "", genre: .init(name: ""))]
        let artistInfo: ArtistInfo = .init(id: 0,
                                           name: "",
                                           imageUrl: "",
                                           genre: .init(name: ""),
                                           tracks: [.init(id: 0,
                                                          title: "",
                                                          lyrics: "",
                                                          albumId: 0,
                                                          album: .init(id: 0, title: "", imageUrl: ""),
                                                          artist: .init(id: 0, name: ""),
                                                          liked: 0)],
                                           albums: [.init(id: 0, title: "", imageUrl: "")])
        
        let usecase = MockArtistUseCase(artists: artists, artistInfo: artistInfo)
        let viewModel = ArtistViewModel(useCase: usecase)
        viewModel.$state
            .sink { state in
                if state.isOpenMenu {
                    expectation.fulfill()
                }
            }
            .store(in: &cancellable)
        
        viewModel.send(.showArtistMenu)
    }
    
    func test_event_like_artist() {
        let expectation = XCTestExpectation(description: "test load artist")
        defer { wait(for: [expectation], timeout: 5) }
        
        let artists: [Artist] = [.init(id: 0, name: "", imageUrl: "", genre: .init(name: ""))]
        let artistInfo: ArtistInfo = .init(id: 0,
                                           name: "",
                                           imageUrl: "",
                                           genre: .init(name: ""),
                                           tracks: [.init(id: 0,
                                                          title: "",
                                                          lyrics: "",
                                                          albumId: 0,
                                                          album: .init(id: 0, title: "", imageUrl: ""),
                                                          artist: .init(id: 0, name: ""),
                                                          liked: 0)],
                                           albums: [.init(id: 0, title: "", imageUrl: "")])
        
        let usecase = MockArtistUseCase(artists: artists, artistInfo: artistInfo)
        let eventLogger = MockEventLogger { data in
            XCTAssertEqual(data.event, "LikeLog")
            expectation.fulfill()
        }
        
        let viewModel = ArtistViewModel(useCase: usecase, eventLogger: eventLogger)
        viewModel.send(.like(artistId: artistInfo.id))
    }
}
