//
//  AlbumViewModel.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/07.
//

import Combine

final class AlbumViewModel: ObservableObject {
    enum Input {
        case appear(albumID: Int)
        case showAlbumMenu
        case showTrackMenu(info: TrackInfo)
    }
    
    enum ActiveSheet {
        case album
        case track(info: TrackInfo)
    }
    
    private let useCase = AlbumUseCase()
    private var cancellables = Set<AnyCancellable>()
    
    @Published private(set) var album: Album?
    @Published private(set) var activeSheet: ActiveSheet = .album
    @Published var showSheet = false
    @Published var isOpenArticle = false
    
    func send(_ input: Input) {
        switch input {
        case let .appear(albumID):
            load(albumID: albumID)
        case .showAlbumMenu:
            activeSheet = .album
            showSheet = true
        case let .showTrackMenu(info):
            activeSheet = .track(info: info)
            showSheet = true
        }
    }
    
    private func load(albumID: Int) {
        useCase.loadAlbum(with: albumID)
            .sink { _ in
                
            } receiveValue: { [weak self] album in
                self?.album = album
            }
            .store(in: &cancellables)
    }
}
