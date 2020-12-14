//
//  TodayViewModelTests.swift
//  MiniVibeTests
//
//  Created by TTOzzi on 2020/12/14.
//

import XCTest
import Combine
@testable import MiniVibe

final class TodayViewModelTests: XCTestCase {
        
    private var cancellables: Set<AnyCancellable> = []
    
    func test_send_appear() {
        let expectation = XCTestExpectation(description: "appear test")
        defer { wait(for: [expectation], timeout: 5) }
        
        let useCase = MockTodayUseCase(
            mixtapes: [
                Mixtape(id: 0, title: "test", subTitle: "test", imageUrl: "test")
            ],
            albums: [
                Album(id: 0,
                      title: "test",
                      description: "test",
                      releaseDate: "test",
                      artist: .init(id: 0, name: "test"),
                      imageUrl: "test",
                      tracks: [])
            ],
            playlists: [
                Playlist(id: 0,
                         title: "test",
                         subTitle: "test",
                         description: "test",
                         imageUrl: "test",
                         customized: true,
                         tracks: [])
            ],
            tracks: [
                TrackInfo(id: 0,
                          title: "test",
                          lyrics: "test",
                          albumId: 0,
                          album: TrackAlbum(id: 0, title: "test", imageUrl: "test"),
                          artist: TrackInfo.Artist(id: 0, name: "test"),
                          liked: 0)
            ],
            magazines: [
                Magazine(id: 0,
                         title: "test",
                         imageUrl: "test",
                         date: "test",
                         category: "test")
            ]
        )
        let viewModel = TodayViewModel(useCase: useCase)
        
        viewModel.$state
            .sink { state in
                if state.mixtapes == useCase.mixtapes,
                   state.albums == useCase.albums,
                   state.playlists == useCase.playlists,
                   state.tracks == useCase.tracks,
                   state.magazines == useCase.magazines {
                    expectation.fulfill()
                }
            }
            .store(in: &cancellables)
        
        viewModel.send(.appear)
    }
}
