//
//  MiniVibeTests.swift
//  MiniVibeTests
//
//  Created by Sue Cho on 2020/11/30.
//

import XCTest
import Combine
@testable import MiniVibe

class MiniVibeTests: XCTestCase {
    
    var subscriptions: Set<AnyCancellable> = []

    func test_network_success() throws {
        let expectation = XCTestExpectation(description: "Network success test")
        let network = NetworkService()
        let url = "https://www.google.com"
        network.request(url: url, request: .get, body: nil)
            .sink { result in
                switch result {
                case .finished:
                    expectation.fulfill()
                case .failure:
                    XCTFail("Network Request Fail")
                }
            } receiveValue: { _ in
                
            }
            .store(in: &subscriptions)
        wait(for: [expectation], timeout: 5)
    }

    func test_network_fail_invalidURL() throws {
        let expectation = XCTestExpectation(description: "Network success test")
        let network = NetworkService()
        let url = ""
        network.request(url: url, request: .get, body: nil)
            .sink { result in
                switch result {
                case .finished:
                    XCTFail("Network Request Success -fail")
                case let .failure(error):
                    XCTAssertEqual(error, NetworkError.invalidURL)
                    expectation.fulfill()
                }
            } receiveValue: { _ in
                XCTFail("Received Value - fail")
            }
            .store(in: &subscriptions)
        wait(for: [expectation], timeout: 5)
    }
    
    func test_network_fail_unknownError() throws {
        let expectation = XCTestExpectation(description: "Network success test")
        let network = NetworkService()
        let url = "abcdefg"
        network.request(url: url, request: .get, body: nil)
            .sink { result in
                switch result {
                case .finished:
                    XCTFail("Network Request Success -fail")
                case let .failure(error):
                    XCTAssertEqual(error, NetworkError.unknownError(message: "Unknown Error"))
                    expectation.fulfill()
                }
            } receiveValue: { _ in
                XCTFail("Received Value - fail")
            }
            .store(in: &subscriptions)
        wait(for: [expectation], timeout: 5)
    }

}
