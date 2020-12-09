//
//  PlaylistViewModel.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/08.
//

import Combine

final class PlaylistViewModel: ObservableObject {
    enum Input {
        case appear(playlistID: Int)
        case showPlaylistMenu
        case showTrackMenu(info: TrackInfo)
    }
    
    enum ActiveSheet {
        case playlist
        case track(info: TrackInfo)
    }
    
    private let useCase = PlaylistUseCase()
    private var cancellables = Set<AnyCancellable>()
    
    @Published private(set) var playlist: Playlist?
    @Published private(set) var activeSheet: ActiveSheet = .playlist
    @Published var showSheet = false
    @Published var isOpenArticle = false
    
    func send(_ input: Input) {
        switch input {
        case let .appear(playlistID):
            load(playlistID: playlistID)
        case .showPlaylistMenu:
            activeSheet = .playlist
            showSheet = true
        case let .showTrackMenu(info):
            activeSheet = .track(info: info)
            showSheet = true
        }
    }
    
    private func load(playlistID: Int) {
        useCase.loadPlaylist(with: playlistID)
            .sink { _ in

            } receiveValue: { [weak self] playlist in
                self?.playlist = playlist
            }
            .store(in: &cancellables)
    }
}
