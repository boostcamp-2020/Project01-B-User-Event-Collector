//
//  AlbumViewModel.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/07.
//

import Combine

final class AlbumViewModel: ObservableObject {
    enum Input {
        case appear
        case showAlbumMenu
        case showTrackMenu(info: Track)
    }
    
    enum ActiveSheet {
        case album
        case track(info: Track)
    }
    
    private let useCase = AlbumUseCase()
    private var cancellables = Set<AnyCancellable>()
    private let id: Int
    
    @Published private(set) var album: Album?
    @Published private(set) var activeSheet: ActiveSheet = .album
    @Published var showSheet = false
    @Published var isOpenArticle = false
    
    init(id: Int) {
        self.id = id
    }
    
    func send(_ input: Input) {
        switch input {
        case .appear:
            load()
        case .showAlbumMenu:
            activeSheet = .album
            showSheet = true
        case let .showTrackMenu(info):
            activeSheet = .track(info: info)
            showSheet = true
        }
    }
    
    private func load() {
        useCase.loadAlbum(with: id)
            .sink { _ in
                
            } receiveValue: { [weak self] album in
                self?.album = album
            }
            .store(in: &cancellables)
    }
}
