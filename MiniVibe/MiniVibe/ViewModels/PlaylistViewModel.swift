//
//  PlaylistViewModel.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/08.
//

import Combine
import EventLogKit

final class PlaylistViewModel: ObservableObject {
    enum Input {
        case appear
        case showPlaylistMenu
        case showTrackMenu(info: TrackViewModel)
        case like
    }
    
    struct State {
        enum ActiveSheet {
            case playlist
            case track(info: TrackViewModel)
        }
        
        var playlist: Playlist?
        var activeSheet: ActiveSheet = .playlist
        var showSheet = false
        var isOpenArticle = false
    }
    
    private let useCase: PlaylistUseCaseType
    private let eventLogger: EventLoggerType
    private var cancellables = Set<AnyCancellable>()
    private let id: Int
    @Published var state = State()
    
    init(id: Int,
         useCase: PlaylistUseCaseType = PlaylistUseCase(),
         eventLogger: EventLoggerType = MiniVibeApp.eventLogger) {
        self.id = id
        self.useCase = useCase
        self.eventLogger = eventLogger
    }
    
    func send(_ input: Input) {
        switch input {
        case .appear:
            load()
        case .showPlaylistMenu:
            state.activeSheet = .playlist
            state.showSheet = true
        case let .showTrackMenu(info):
            state.activeSheet = .track(info: info)
            state.showSheet = true
        case .like:
            like()
        }
    }
    
    private func load() {
        useCase.loadPlaylist(with: id)
            .sink { _ in

            } receiveValue: { [weak self] playlist in
                self?.state.playlist = playlist
            }
            .store(in: &cancellables)
    }
    
    private func like() {
        eventLogger.send(LikeLog(userId: 0,
                                 data: .init(type: "Playlist",
                                             id: id),
                                 isLike: true))
    }
}
