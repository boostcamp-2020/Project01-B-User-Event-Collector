//
//  ArtistSectionViewModel.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/09.
//

import Combine
import Foundation

final class ArtistSectionViewModel: ObservableObject {
    enum Input {
        case appear
    }
    
    struct State {
        var artists = [Artist]()
    }
    private let useCase: ArtistUseCaseType
    private var cancellables = Set<AnyCancellable>()
    
    @Published private(set) var state = State()
    
    init(useCase: ArtistUseCaseType = ArtistUseCase()) {
        self.useCase = useCase
    }
    
    private func load() {
        useCase.loadArtists()
            .sink { _ in
                
            } receiveValue: { [weak self] artists in
                self?.state.artists = artists
            }
            .store(in: &cancellables)
    }
    
    func send(_ input: Input) {
        switch input {
        case .appear:
            load()
        }
    }
}
