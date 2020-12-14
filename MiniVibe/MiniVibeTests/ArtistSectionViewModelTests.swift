//
//  ArtistSectionViewModelTests.swift
//  MiniVibeTests
//
//  Created by Sue Cho on 2020/12/15.
//

import XCTest
import Combine
@testable import MiniVibe

class ArtistSectionViewModelTests: XCTestCase {
    
    private var cancellable: Set<AnyCancellable> = []
    
    func test_appear_artist_section() {
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
        
        let usecase = MockArtistSectionUseCase(artists: artists, artistInfo: artistInfo)
        let viewModel = ArtistSectionViewModel(useCase: usecase)
        
        viewModel.$state
            .sink { state in
                if state.artists == usecase.artists {
                    expectation.fulfill()
                }
            }
            .store(in: &cancellable)
        
        viewModel.send(.appear)
    }
}
