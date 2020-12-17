//
//  ChartsViewModelTests.swift
//  MiniVibeTests
//
//  Created by Sue Cho on 2020/12/16.
//

import XCTest
import Combine
@testable import MiniVibe

final class ChartsViewModelTests: XCTestCase {

    private var cancellables: Set<AnyCancellable> = []
    
    func test_send_appear() {
        let expectation = XCTestExpectation(description: "appear test")
        defer { wait(for: [expectation], timeout: 5) }
        
        let usecase = MockChartsUseCase(tracks: [.init(id: 0,
                                                       title: "title",
                                                       lyrics: "lyrics",
                                                       albumId: 0,
                                                       album: .init(id: 0,
                                                                    title: "title",
                                                                    imageUrl: "imageurl"),
                                                       artist: .init(id: 0,
                                                                     name: "name"),
                                                       liked: 1)])
        let viewModel = ChartsViewModel(usecase: usecase)
        viewModel.$state
            .sink { state in
                if state.tracks1 == usecase.tracks {
                    expectation.fulfill()
                }
            }
            .store(in: &cancellables)
        viewModel.send(.appear)
    }

}
