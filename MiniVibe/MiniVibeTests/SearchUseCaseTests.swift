//
//  SearchUseCaseTests.swift
//  MiniVibeTests
//
//  Created by Sue Cho on 2020/12/14.
//

import XCTest
import Combine
@testable import MiniVibe

class SearchUseCaseTests: XCTestCase {
    
    private var cancellables: Set<AnyCancellable> = []
    
    func test_load_news_success() {
        let expectation = XCTestExpectation(description: "news load success test")
        defer { wait(for: [expectation], timeout: 5) }
        
        let news = NewsList(data: [
            News(id: 0, title: "news title", imageUrl: "", date: "", link: "", albumId: 0)
        ])
        let data = try? JSONEncoder().encode(news)
        let usecase = SearchUseCase(network: MockSuccessNetworkService(data: data!))
        usecase.loadNews()
            .sink { result in
                switch result {
                case .finished:
                    expectation.fulfill()
                case let .failure(error):
                    XCTFail(error.localizedDescription)
                }
            } receiveValue: { receivedNews in
                XCTAssertEqual(receivedNews, news.data)
            }
            .store(in: &cancellables)
    }

    func test_load_news_failure() {
        let expectation = XCTestExpectation(description: "news load success test")
        defer { wait(for: [expectation], timeout: 5) }
        
        let usecase = SearchUseCase(network: MockFailureNetworkService())
        usecase.loadNews()
            .sink { result in
                switch result {
                case .finished:
                    XCTFail("Result should not finish")
                case let .failure(error):
                    XCTAssertEqual(error, UseCaseError.decodingError)
                    expectation.fulfill()
                }
            } receiveValue: { _ in
                XCTFail("Value should not be received")
            }
            .store(in: &cancellables)
    }
    
}
