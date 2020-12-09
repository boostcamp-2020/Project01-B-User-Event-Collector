//
//  TodayViewModel.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/07.
//

import Combine

final class TodayViewModel: ObservableObject {
    private let useCase = TodayUseCase()
    private var cancellables = Set<AnyCancellable>()
    
    @Published private(set) var mixtapes = [Mixtape]()
    @Published private(set) var albums = [Album]()
    @Published private(set) var tracks = [TrackInfo]()
    @Published private(set) var playlists = [Playlist]()
    @Published private(set) var magazines = [Magazine]()
    
    func load() {
        useCase.loadMixtapes()
            .sink { _ in
                
            } receiveValue: { [weak self] mixtapes in
                self?.mixtapes = mixtapes
            }
            .store(in: &cancellables)
        
        useCase.loadAlbums()
            .sink { _ in
                // error 처리
            } receiveValue: { [weak self] albums in
                self?.albums = albums
            }
            .store(in: &cancellables)
        
        useCase.loadTracks()
            .sink { _ in
                
            } receiveValue: { [weak self] tracks in
                self?.tracks = tracks
            }
            .store(in: &cancellables)
        
        useCase.loadPlaylists()
            .sink { _ in
                
            } receiveValue: { [weak self] playlists in
                self?.playlists = playlists
            }
            .store(in: &cancellables)
        
        useCase.loadMagazines()
            .sink { _ in
                
            } receiveValue: { [weak self] magazines in
                self?.magazines = magazines
            }
            .store(in: &cancellables)
    }
}
