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
        case appear(artistID: Int)
        case showArtistMenu
        case like(artistId: Int)
    }
    
    struct State {
        var artist: ArtistInfo?
        var isOpenMenu = false
    }
    
    private let useCase: ArtistUseCaseType
    private let eventLogger: EventLoggerType
    private var cancellables = Set<AnyCancellable>()
    
    @Published var state = State()
    
    init(useCase: ArtistUseCaseType = ArtistUseCase(),
         eventLogger: EventLoggerType = MiniVibeApp.eventLogger) {
        self.useCase = useCase
        self.eventLogger = eventLogger
    }
    
    func send(_ input: Input) {
        switch input {
        case let .appear(artistID):
            load(artistID: artistID)
        case .showArtistMenu:
            state.isOpenMenu = true
        case let .like(artistId):
            like(artistId: artistId)
        }
    }
    
    private func load(artistID: Int) {
        useCase.loadArtist(with: artistID)
            .sink { _ in
                
            } receiveValue: { [weak self] artist in
                self?.state.artist = artist
            }
            .store(in: &cancellables)
    }
    
    private func like(artistId: Int) {
        eventLogger.send(LikeLog(userId: 0,
                                 data: .init(type: "Artist", id: artistId),
                                 isLike: true)
        )
    }
}
