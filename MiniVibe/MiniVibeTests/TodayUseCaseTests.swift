//
//  TodayUseCaseTests.swift
//  MiniVibeTests
//
//  Created by TTOzzi on 2020/12/14.
//

import XCTest
import Combine
@testable import MiniVibe

final class TodayUseCaseTests: XCTestCase {
    
    private var cancellables: Set<AnyCancellable> = []
    
    func test_load_mixtapes_success() {
        let expectation = XCTestExpectation(description: "mixtape load test")
        defer { wait(for: [expectation], timeout: 5) }
        
        let mixtapes = Mixtapes(data: [
            .init(id: 0, title: "test", subTitle: "test", imageUrl: "test")
        ])
        let data = try? JSONEncoder().encode(mixtapes)
        let useCase = TodayUseCase(network: MockSuccessNetworkService(data: data!))
        
        useCase.loadMixtapes()
            .sink { result in
                switch result {
                case .finished:
                    expectation.fulfill()
                case let .failure(error):
                    XCTFail(error.localizedDescription)
                }
            } receiveValue: { receivedMixtapes in
                XCTAssertEqual(mixtapes.data, receivedMixtapes)
            }
            .store(in: &cancellables)
    }
    
    func test_load_mixtapes_failure() {
        let expectation = XCTestExpectation(description: "mixtape load test")
        defer { wait(for: [expectation], timeout: 5) }

        let useCase = TodayUseCase(network: MockFailureNetworkService())
        
        useCase.loadMixtapes()
            .sink { result in
                switch result {
                case .finished:
                    XCTFail()
                case let .failure(error):
                    XCTAssertEqual(error, UseCaseError.decodingError)
                    expectation.fulfill()
                }
            } receiveValue: { _ in
                XCTFail()
            }
            .store(in: &cancellables)
    }
}
