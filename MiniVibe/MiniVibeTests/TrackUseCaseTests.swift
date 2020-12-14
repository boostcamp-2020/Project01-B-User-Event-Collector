//
//  TrackUseCaseTests.swift
//  MiniVibeTests
//
//  Created by Sue Cho on 2020/12/14.
//

import XCTest
import Combine
@testable import MiniVibe

class TrackUseCaseTests: XCTestCase {
    
    private var cancellables = Set<AnyCancellable>()
    
    func test_load_track_success() {
        let expectations = XCTestExpectation(description: "track load test")
        defer { wait(for: [expectations], timeout: 5) }
        
        let tracks = SingleTrackResponse(
            data: TrackInfo(id: 0,
                            title: "",
                            lyrics: "",
                            albumId: 0,
                            album: TrackAlbum(id: 0,
                                              title: "",
                                              imageUrl: ""),
                            artist: .init(id: 0,
                                          name: ""),
                            liked: 0))
        let data = try? JSONEncoder().encode(tracks)
        let usecase = TrackUseCase(network: MockSuccessNetworkService(data: data!))
        usecase.loadTrack(id: tracks.data.id)
            .sink { result in
                switch result {
                case .finished:
                    expectations.fulfill()
                case let .failure(error):
                    XCTFail(error.localizedDescription)
                }
            } receiveValue: { receivedTrack in
                XCTAssertEqual(receivedTrack, tracks.data)
            }
            .store(in: &cancellables)
    }
    
    func test_load_track_failure() {
        let expectations = XCTestExpectation(description: "track load test")
        defer { wait(for: [expectations], timeout: 5) }
        let usecase = TrackUseCase(network: MockFailureNetworkService())
        usecase.cancelLikedTrack(id: 0)
            .sink { result in
                switch result {
                case .finished:
                    XCTFail("Result should not finish")
                case let .failure(error):
                    XCTAssertEqual(error, UseCaseError.decodingError)
                    expectations.fulfill()
                }
            } receiveValue: { _ in
                XCTFail("Result should not finish")
            }
            .store(in: &cancellables)
    }
    
    func test_like_track_success() {
        let expectations = XCTestExpectation(description: "track like test")
        defer { wait(for: [expectations], timeout: 5) }
        
        let likeTrack = TrackUseCase.LikeTrackResponse(success: true)
        let data = try? JSONEncoder().encode(likeTrack)
        let usecase = TrackUseCase(network: MockSuccessNetworkService(data: data!))
        usecase.likeTrack(id: 0)
            .sink { result in
                switch result {
                case .finished:
                    expectations.fulfill()
                case let .failure(error):
                    XCTFail(error.localizedDescription)
                }
            } receiveValue: { receivedResult in
                XCTAssertEqual(receivedResult, likeTrack.success)
            }
            .store(in: &cancellables)
    }
    
    func test_like_track_failure() {
        let expectations = XCTestExpectation(description: "track like test")
        defer { wait(for: [expectations], timeout: 5) }
        
        let usecase = TrackUseCase(network: MockFailureNetworkService())
        usecase.likeTrack(id: 0)
            .sink { result in
                switch result {
                case .finished:
                    XCTFail("Result should not finish")
                case let .failure(error):
                    XCTAssertEqual(error, UseCaseError.decodingError)
                    expectations.fulfill()
                }
            } receiveValue: { _ in
                XCTFail("Result should not finish")
            }
            .store(in: &cancellables)
    }
    
    func test_cancel_like_track_success() {
        let expectations = XCTestExpectation(description: "track like test")
        defer { wait(for: [expectations], timeout: 5) }
        
        let cancelLikeTrack = TrackUseCase.LikeTrackResponse(success: true)
        let data = try? JSONEncoder().encode(cancelLikeTrack)
        let usecase = TrackUseCase(network: MockSuccessNetworkService(data: data!))
        usecase.cancelLikedTrack(id: 0)
            .sink { result in
                switch result {
                case .finished:
                    expectations.fulfill()
                case let .failure(error):
                    XCTFail(error.localizedDescription)
                }
            } receiveValue: { receivedResult in
                XCTAssertEqual(receivedResult, cancelLikeTrack.success)
            }
            .store(in: &cancellables)
    }
    
    func test_cancel_like_track_failure() {
        let expectations = XCTestExpectation(description: "track like test")
        defer { wait(for: [expectations], timeout: 5) }
        
        let usecase = TrackUseCase(network: MockFailureNetworkService())
        usecase.cancelLikedTrack(id: 0)
            .sink { result in
                switch result {
                case .finished:
                    XCTFail("Result should not finish")
                case let .failure(error):
                    XCTAssertEqual(error, UseCaseError.decodingError)
                    expectations.fulfill()
                }
            } receiveValue: { _ in
                XCTFail("Result should not finish")
            }
            .store(in: &cancellables)
        
    }
}
