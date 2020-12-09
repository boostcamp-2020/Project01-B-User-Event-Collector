//
//  ArtistSectionViewModel.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/09.
//

import Combine
import Foundation

final class ArtistSectionViewModel: ObservableObject {
    private let useCase = ArtistUseCase()
    private var cancellables = Set<AnyCancellable>()
    
    @Published private(set) var artists = [Artist]()
    
    func load() {
        useCase.loadArtists()
            .sink { _ in
                
            } receiveValue: { [weak self] artists in
                self?.artists = artists
            }
            .store(in: &cancellables)
    }
}
