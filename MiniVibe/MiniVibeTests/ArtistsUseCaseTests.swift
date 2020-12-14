//
//  ArtistsUseCaseTests.swift
//  MiniVibeTests
//
//  Created by Sue Cho on 2020/12/14.
//

import XCTest
import Combine
@testable import MiniVibe

class ArtistsUseCaseTests: XCTestCase {
    
    private var cancellables = Set<AnyCancellable>()
    
    func test_load_artists_success() {
        let expectations = XCTestExpectation(description: "artists load success test")
        defer { wait(for: [expectations], timeout: 5) }
        
        let artists = Artists(data: [
            Artist(id: 0, name: "", imageUrl: "", genre: .init(name: ""))
        ])
        let data = try? JSONEncoder().encode(artists)
        let usecase = ArtistUseCase(network: MockSuccessNetworkService(data: data!))
        usecase.loadArtists()
            .sink { result in
                switch result {
                case .finished:
                    expectations.fulfill()
                case let .failure(error):
                    XCTFail(error.localizedDescription)
                }
            } receiveValue: { receivedArtists in
                XCTAssertEqual(receivedArtists, artists.data)
            }
            .store(in: &cancellables)
     
    }
    
    func test_load_artist_success() {
        let expectations = XCTestExpectation(description: "artist load success test")
        defer { wait(for: [expectations], timeout: 5) }
        let usecase = ArtistUseCase(network: MockFailureNetworkService())
        usecase.loadArtists()
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

    func test_load_artists_failure() {
        let expectations = XCTestExpectation(description: "artists load failure test")
        defer { wait(for: [expectations], timeout: 5) }
        
        let artist = ArtistUseCase.ArtistResponse(
            data: ArtistInfo(id: 0,
                             name: "",
                             imageUrl: "",
                             genre: .init(name: ""),
                             tracks: [TrackInfo(id: 0,
                                                title: "",
                                                lyrics: "",
                                                albumId: 0,
                                                album: TrackAlbum(id: 0,
                                                                  title: "",
                                                                  imageUrl: ""),
                                                artist: .init(id: 0, name: ""),
                                                liked: 0)
                             ],
                             albums: [.init(id: 0, title: "", imageUrl: "")]))
        let data = try? JSONEncoder().encode(artist)
        let usecase = ArtistUseCase(network: MockSuccessNetworkService(data: data!))
        usecase.loadArtist(with: artist.data.id)
            .sink { result in
                switch result {
                case .finished:
                    expectations.fulfill()
                case let .failure(error):
                    XCTFail(error.localizedDescription)
                }
            } receiveValue: { receivedInfo in
                XCTAssertEqual(receivedInfo, artist.data)
            }
            .store(in: &cancellables)

    }

    func test_load_artist_failure() {
        let expectations = XCTestExpectation(description: "artist load failure test")
        defer { wait(for: [expectations], timeout: 5) }
        
        let usecase = ArtistUseCase(network: MockFailureNetworkService())
        usecase.loadArtist(with: 0)
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
