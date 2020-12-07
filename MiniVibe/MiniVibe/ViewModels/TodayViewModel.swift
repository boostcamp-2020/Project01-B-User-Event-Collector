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
    
    @Published var albums = [Album]()
    @Published var playlists = [Playlist]()
    @Published var magazines = [Magazine]()
    
    func load() {
        useCase.loadAlbums()
            .sink { _ in
                // error 처리
            } receiveValue: { [weak self] albums in
                self?.albums = albums
            }
            .store(in: &cancellables)
        
        useCase.loadPlaylists()
            .sink { result in
                print(result)
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
