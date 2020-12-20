//
//  TodayViewModel.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/07.
//

import Combine

final class TodayViewModel: ObservableObject {
    
    enum Input {
        case appear
    }
    
    struct State {
        var mixtapes = [Mixtape]()
        var albums = [Album]()
        var tracks = [TrackInfo]()
        var playlists = [Playlist]()
        var magazines = [Magazine]()
    }
    
    private let useCase: TodayUseCaseType
    private var cancellables = Set<AnyCancellable>()
    @Published private(set) var state = State()
    
    init(useCase: TodayUseCaseType = TodayUseCase()) {
        self.useCase = useCase
    }
    
    func send(_ input: Input) {
        switch input {
        case .appear:
            load()
        }
    }
    
    private func load() {
        useCase.loadMixtapes()
            .sink { _ in
                
            } receiveValue: { [weak self] mixtapes in
                self?.state.mixtapes = mixtapes
            }
            .store(in: &cancellables)
        
        useCase.loadAlbums()
            .sink { _ in
                // error 처리
            } receiveValue: { [weak self] albums in
                self?.state.albums = albums
            }
            .store(in: &cancellables)
        
        useCase.loadTracks()
            .sink { _ in
                
            } receiveValue: { [weak self] tracks in
                self?.state.tracks = tracks
            }
            .store(in: &cancellables)
        
        useCase.loadPlaylists()
            .sink { _ in
                
            } receiveValue: { [weak self] playlists in
                self?.state.playlists = playlists
            }
            .store(in: &cancellables)
        
        useCase.loadMagazines()
            .sink { _ in
                
            } receiveValue: { [weak self] magazines in
                self?.state.magazines = magazines
            }
            .store(in: &cancellables)
    }
}
