//
//  ArtistViewModel.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/09.
//

import Combine
import Foundation

final class ArtistViewModel: ObservableObject {
    private let useCase = ArtistUseCase()
    private var cancellables = Set<AnyCancellable>()
    
    @Published private(set) var artist: ArtistInfo?
    
    func load(artistID: Int) {
        useCase.loadArtist(with: artistID)
            .sink { _ in
                
            } receiveValue: { [weak self] artist in
                self?.artist = artist
            }
            .store(in: &cancellables)
    }
}
