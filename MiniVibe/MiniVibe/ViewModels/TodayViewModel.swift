//
//  TodayViewModel.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/07.
//

import Combine

final class TodayViewModel: ObservableObject {
    let usecase = TodayUseCase()
    var cancellables = Set<AnyCancellable>()
    
    @Published var albums = [Album]()
    
    func load() {
        usecase.loadAlbums()
            .sink { _ in
                // error 처리
            } receiveValue: { [weak self] albums in
                self?.albums = albums
            }
            .store(in: &cancellables)
    }
}
