//
//  ArtistSectionViewModel.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/09.
//

import Combine
import Foundation

final class ArtistSectionViewModel: ObservableObject {
    private let useCase: ArtistUseCaseType
    private var cancellables = Set<AnyCancellable>()
    
    @Published private(set) var artists = [Artist]()
    
    init(useCase: ArtistUseCaseType = ArtistUseCase()) {
        self.useCase = useCase
    }
    
    func load() {
        useCase.loadArtists()
            .sink { _ in
                
            } receiveValue: { [weak self] artists in
                self?.artists = artists
            }
            .store(in: &cancellables)
    }
}
