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
    
    enum ActiveSheet {
        case playlist
        case track(info: TrackViewModel)
    }
    
    private let useCase: PlaylistUseCaseType
    private let eventLogger: EventLoggerType
    private var cancellables = Set<AnyCancellable>()
    private let id: Int
    
    @Published private(set) var playlist: Playlist?
    @Published private(set) var activeSheet: ActiveSheet = .playlist
    @Published var showSheet = false
    @Published var isOpenArticle = false
    
    init(id: Int, useCase: PlaylistUseCaseType = PlaylistUseCase(),eventLogger: EventLoggerType) {
        self.id = id
        self.useCase = useCase
        self.eventLogger = eventLogger
    }
    
    func send(_ input: Input) {
        switch input {
        case .appear:
            load()
        case .showPlaylistMenu:
            activeSheet = .playlist
            showSheet = true
        case let .showTrackMenu(info):
            activeSheet = .track(info: info)
            showSheet = true
        case .like:
            like()
        }
    }
    
    private func load() {
        useCase.loadPlaylist(with: id)
            .sink { _ in

            } receiveValue: { [weak self] playlist in
                self?.playlist = playlist
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
