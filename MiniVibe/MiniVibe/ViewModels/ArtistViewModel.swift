//
//  ArtistViewModel.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/09.
//

import Combine
import Foundation
import EventLogKit

final class ArtistViewModel: ObservableObject {
    enum Input {
        case appear
        case showArtistMenu
        case like
    }
    
    struct State {
        var artist: ArtistInfo?
        var isOpenMenu = false
    }
    
    private let useCase: ArtistUseCaseType
    private let eventLogger: EventLoggerType
    private var cancellables = Set<AnyCancellable>()
    private let id: Int
    
    @Published var state = State()
    
    init(id: Int,
         useCase: ArtistUseCaseType = ArtistUseCase(),
         eventLogger: EventLoggerType = MiniVibeApp.eventLogger) {
        self.id = id
        self.useCase = useCase
        self.eventLogger = eventLogger
    }
    
    func send(_ input: Input) {
        switch input {
        case .appear:
            load()
        case .showArtistMenu:
            state.isOpenMenu = true
        case .like:
            like()
        }
    }
    
    private func load() {
        useCase.loadArtist(with: id)
            .sink { _ in
                
            } receiveValue: { [weak self] artist in
                self?.state.artist = artist
            }
            .store(in: &cancellables)
    }
    
    private func like() {
        eventLogger.send(LikeLog(userId: id,
                                 data: .init(type: "Artist", id: id),
                                 isLike: true)
        )
    }
}
