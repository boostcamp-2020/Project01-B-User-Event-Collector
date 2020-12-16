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
        var tracks1 = [TrackInfo]()
        var tracks2 = [TrackInfo]()
        var tracks3 = [TrackInfo]()
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
                self?.state.tracks1 = tracks.sorted(by: { $0.id < $1.id })
                self?.state.tracks2 = tracks.sorted(by: { $0.title < $1.title })
                self?.state.tracks3 = tracks.sorted(by: { $0.title > $1.title })
            }
            .store(in: &cancellables)
    }
}
