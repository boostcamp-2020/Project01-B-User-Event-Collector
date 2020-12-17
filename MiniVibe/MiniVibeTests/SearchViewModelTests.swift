//
//  SearchViewModelTests.swift
//  MiniVibeTests
//
//  Created by TTOzzi on 2020/12/15.
//

import XCTest
import Combine
@testable import MiniVibe

final class SearchViewModelTests: XCTestCase {
    
    private let useCase = MockSearchUseCase(news: [.init(id: 0,
                                                         title: "test",
                                                         imageUrl: "test",
                                                         date: "test",
                                                         link: "test",
                                                         albumId: 0)])
    private var cancellables: Set<AnyCancellable> = []
    
    func test_send_appear() {
        let expectation = XCTestExpectation(description: "appear test")
        defer { wait(for: [expectation], timeout: 5) }
        
        let viewModel = SearchViewModel(useCase: useCase,
                                        eventLogger: MockEventLogger())
        
        viewModel.$state
            .sink { state in
                if state.newsList == self.useCase.news {
                    expectation.fulfill()
                }
            }
            .store(in: &cancellables)
        
        viewModel.send(.appear)
    }
    
    func test_send_search_bar_tapped() {
        let expectation = XCTestExpectation(description: "searchBarTapped test")
        defer { wait(for: [expectation], timeout: 5) }
        
        let viewModel = SearchViewModel(useCase: useCase,
                                        eventLogger: MockEventLogger())
        
        viewModel.$state
            .sink { state in
                if state.isEditing {
                    expectation.fulfill()
                }
            }
            .store(in: &cancellables)
        
        viewModel.send(.searchBarTapped)
    }
    
    func test_send_search() {
        let expectation = XCTestExpectation(description: "search test")
        defer { wait(for: [expectation], timeout: 5) }
        
        let eventLogger = MockEventLogger(handler: { data in
            XCTAssertEqual(data.event, "Search")
            expectation.fulfill()
        })
        let viewModel = SearchViewModel(useCase: useCase,
                                        eventLogger: eventLogger)
        
        viewModel.send(.search)
    }
    
    func test_send_cancel_search() {
        let expectation = XCTestExpectation(description: "cancel search test")
        defer { wait(for: [expectation], timeout: 5) }
        
        let viewModel = SearchViewModel(useCase: useCase,
                                        eventLogger: MockEventLogger())
        
        viewModel.state.isEditing = true
        viewModel.state.searchedText = "testtest"
        
        viewModel.$state
            .sink { state in
                if !state.isEditing,
                   state.searchedText.isEmpty {
                    expectation.fulfill()
                }
            }
            .store(in: &cancellables)
        
        viewModel.send(.cancelSearch)
    }
}
