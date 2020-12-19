//
//  LibraryViewModel.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/17.
//

import Foundation
import Combine
import EventLogKit

final class LibraryViewModel: ObservableObject {
    
    enum Input {
        case appear
        case tapMenuButton(track: TrackViewModel)
    }
    
    struct State {
        var likedTracks = [TrackInfo]()
        var isMenuOpen = false
        var tappedTrack: TrackViewModel?
    }
    
    @Published var state = State()
    private let usecase: LibraryUseCaseType
    private let eventLogger: EventLoggerType
    private var cancellables = Set<AnyCancellable>()
    
    init(usecase: LibraryUseCaseType = LibraryUseCase(),
         eventLogger: EventLoggerType = MiniVibeApp.eventLogger) {
        self.usecase = usecase
        self.eventLogger = eventLogger
    }
    
    func send(_ input: Input) {
        switch input {
        case .appear:
            load()
        case let .tapMenuButton(track):
            state.isMenuOpen = true
            state.tappedTrack = track
        }
    }
    
    private func load() {
        usecase.loadLikedTracks()
            .sink { _ in
                
            } receiveValue: { [weak self] tracks in
                self?.state.likedTracks = tracks
            }
            .store(in: &cancellables)
    }

}
