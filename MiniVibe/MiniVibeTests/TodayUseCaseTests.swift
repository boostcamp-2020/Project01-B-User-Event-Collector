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
        let expectation = XCTestExpectation(description: "mixtape load success test")
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
        let expectation = XCTestExpectation(description: "mixtape load failure test")
        defer { wait(for: [expectation], timeout: 5) }
        
        let useCase = TodayUseCase(network: MockFailureNetworkService())
        
        useCase.loadMixtapes()
            .sink { result in
                switch result {
                case .finished:
                    XCTFail()
                case let .failure(error):
                    XCTAssertEqual(error, .decodingError)
                    expectation.fulfill()
                }
            } receiveValue: { _ in
                XCTFail()
            }
            .store(in: &cancellables)
    }
    
    func test_load_albums_success() {
        let expectation = XCTestExpectation(description: "albums load test")
        defer { wait(for: [expectation], timeout: 5) }
        
        let albums = Albums(data: [
            .init(id: 0,
                  title: "test",
                  description: "test",
                  releaseDate: "test",
                  artist: .init(id: 0, name: "test"),
                  imageUrl: "test",
                  tracks: [])
        ])
        let data = try? JSONEncoder().encode(albums)
        let useCase = TodayUseCase(network: MockSuccessNetworkService(data: data!))
        
        useCase.loadAlbums()
            .sink { result in
                switch result {
                case .finished:
                    expectation.fulfill()
                case let .failure(error):
                    XCTFail(error.localizedDescription)
                }
            } receiveValue: { receivedAlbums in
                XCTAssertEqual(albums.data, receivedAlbums)
            }
            .store(in: &cancellables)
    }
    
    func test_load_albums_failure() {
        let expectation = XCTestExpectation(description: "albums load test")
        defer { wait(for: [expectation], timeout: 5) }
        
        let useCase = TodayUseCase(network: MockFailureNetworkService())
        
        useCase.loadAlbums()
            .sink { result in
                switch result {
                case .finished:
                    XCTFail()
                case let .failure(error):
                    XCTAssertEqual(error, .decodingError)
                    expectation.fulfill()
                }
            } receiveValue: { _ in
                XCTFail()
            }
            .store(in: &cancellables)
    }
    
    func test_load_playlists_success() {
        let expectation = XCTestExpectation(description: "playlists load test")
        defer { wait(for: [expectation], timeout: 5) }
        
        let playlists = Playlists(data: [
            .init(id: 0,
                  title: "test",
                  subTitle: "test",
                  description: "test",
                  imageUrl: "test",
                  customized: false,
                  tracks: [])
        ])
        let data = try? JSONEncoder().encode(playlists)
        let useCase = TodayUseCase(network: MockSuccessNetworkService(data: data!))
        
        useCase.loadPlaylists()
            .sink { result in
                switch result {
                case .finished:
                    expectation.fulfill()
                case let .failure(error):
                    XCTFail(error.localizedDescription)
                }
            } receiveValue: { receivedPlaylists in
                XCTAssertEqual(playlists.data, receivedPlaylists)
            }
            .store(in: &cancellables)
    }
    
    func test_load_playlists_failure() {
        let expectation = XCTestExpectation(description: "playlists load test")
        defer { wait(for: [expectation], timeout: 5) }
        
        let useCase = TodayUseCase(network: MockFailureNetworkService())
        
        useCase.loadPlaylists()
            .sink { result in
                switch result {
                case .finished:
                    XCTFail()
                case let .failure(error):
                    XCTAssertEqual(error, .decodingError)
                    expectation.fulfill()
                }
            } receiveValue: { _ in
                XCTFail()
            }
            .store(in: &cancellables)
    }
    
    func test_load_tracks_success() {
        let expectation = XCTestExpectation(description: "tracks load test")
        defer { wait(for: [expectation], timeout: 5) }
        
        let tracks = TrackResponse(data: [
            .init(id: 0,
                  title: "test",
                  lyrics: "test",
                  albumId: 0,
                  album: .init(id: 0,
                               title: "test",
                               imageUrl: "test"),
                  artist: .init(id: 0,
                                name: "test"),
                  liked: 0)
        ])
        let data = try? JSONEncoder().encode(tracks)
        let useCase = TodayUseCase(network: MockSuccessNetworkService(data: data!))
        
        useCase.loadTracks()
            .sink { result in
                switch result {
                case .finished:
                    expectation.fulfill()
                case let .failure(error):
                    XCTFail(error.localizedDescription)
                }
            } receiveValue: { receivedTracks in
                XCTAssertEqual(tracks.data, receivedTracks)
            }
            .store(in: &cancellables)
    }
    
    func test_load_tracks_failure() {
        let expectation = XCTestExpectation(description: "tracks load test")
        defer { wait(for: [expectation], timeout: 5) }
        
        let useCase = TodayUseCase(network: MockFailureNetworkService())
        
        useCase.loadTracks()
            .sink { result in
                switch result {
                case .finished:
                    XCTFail()
                case let .failure(error):
                    XCTAssertEqual(error, .decodingError)
                    expectation.fulfill()
                }
            } receiveValue: { _ in
                XCTFail()
            }
            .store(in: &cancellables)
    }
    
    func test_load_magazines_success() {
        let expectation = XCTestExpectation(description: "magazines load test")
        defer { wait(for: [expectation], timeout: 5) }
        
        let magazines = Magazines(data: [
            .init(id: 0,
                  title: "test",
                  imageUrl: "test",
                  date: "test",
                  category: "test")
        ])
        let data = try? JSONEncoder().encode(magazines)
        let useCase = TodayUseCase(network: MockSuccessNetworkService(data: data!))
        
        useCase.loadMagazines()
            .sink { result in
                switch result {
                case .finished:
                    expectation.fulfill()
                case let .failure(error):
                    XCTFail(error.localizedDescription)
                }
            } receiveValue: { receivedMagazines in
                XCTAssertEqual(magazines.data, receivedMagazines)
            }
            .store(in: &cancellables)
    }
    
    func test_load_magazines_failure() {
        let expectation = XCTestExpectation(description: "magazines load test")
        defer { wait(for: [expectation], timeout: 5) }
        
        let useCase = TodayUseCase(network: MockFailureNetworkService())
        
        useCase.loadMagazines()
            .sink { result in
                switch result {
                case .finished:
                    XCTFail()
                case let .failure(error):
                    XCTAssertEqual(error, .decodingError)
                    expectation.fulfill()
                }
            } receiveValue: { _ in
                XCTFail()
            }
            .store(in: &cancellables)
    }
}
