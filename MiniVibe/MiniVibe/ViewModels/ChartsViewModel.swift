//
//  ChartViewModel.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/16.
//

import Foundation
import Combine

final class ChartsViewModel: ObservableObject {
    
    enum Input {
        case appear
    }
    
    struct State {
        var tracks = [TrackInfo]()
        var albums = [Album]()
    }
    
    private let usecase: ChartsUseCaseType
    private var cancellables = Set<AnyCancellable>()
    @Published private(set) var state = State()
    
    init(usecase: ChartsUseCaseType = ChartsUseCase()) {
        self.usecase = usecase
    }
    
    func send(_ input: Input) {
        switch input {
        case .appear:
            load()
        }
    }
    
    private func load() {
        usecase.loadTracks()
            .sink { _ in
                
            } receiveValue: { [weak self] tracks in
                self?.state.tracks = tracks
            }
            .store(in: &cancellables)
        
        usecase.loadAlbums()
            .sink { _ in
                
            } receiveValue: { [weak self] albums in
                self?.state.albums = albums
            }
            .store(in: &cancellables)
    }
}
