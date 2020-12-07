//
//  AlbumViewModel.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/07.
//

import Combine

final class AlbumViewModel: ObservableObject {
    private let useCase = AlbumUseCase()
    private var cancellables = Set<AnyCancellable>()
    private let id: Int
    
    @Published var album: Album?
    
    init(id: Int) {
        self.id = id
    }
    
    func load() {
        useCase.loadAlbum(with: id)
            .sink { _ in
                
            } receiveValue: { [weak self] album in
                self?.album = album
            }
            .store(in: &cancellables)
    }
}
