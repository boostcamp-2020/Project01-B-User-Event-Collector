//
//  MainTabViewModelTests.swift
//  MiniVibeTests
//
//  Created by Sue Cho on 2020/12/15.
//

import XCTest
import Combine
@testable import MiniVibe

final class MainTabViewModelTests: XCTestCase {
    
    private var cancellables = Set<AnyCancellable>()
    
    func test_send_selection_log() {
        let expectation = XCTestExpectation(description: "Tabview transition test")
        expectation.expectedFulfillmentCount = 2 // 최초 sink 시 값이 존재
        
        defer { wait(for: [expectation], timeout: 5) }
        
        let eventLogger = MockEventLogger { (data) in
            XCTAssertEqual(data.event, "TabViewTransition")
            expectation.fulfill()
        }
        let viewModel = MainTabViewModel(eventLogger: eventLogger)
        
        viewModel.state.tabViewSelection = .charts
    }
    
    func test_remove_duplicate_selection_log() {
        let expectation = XCTestExpectation(description: "Tabview transition test")
        
        defer { wait(for: [expectation], timeout: 5) }
        
        let eventLogger = MockEventLogger { (data) in
            XCTAssertEqual(data.event, "TabViewTransition")
            expectation.fulfill()
        }
        let viewModel = MainTabViewModel(eventLogger: eventLogger)
        
        viewModel.state.tabViewSelection = .today
    }
}
