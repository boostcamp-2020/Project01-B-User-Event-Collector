//
//  AlbumViewModel.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/07.
//

import Combine
import EventLogKit

final class AlbumViewModel: ObservableObject {
    
    enum Input {
        case appear
        case showAlbumMenu
        case showTrackMenu(info: TrackViewModel)
        case like
    }
    
    struct State {
        enum ActiveSheet {
            case album
            case track(info: TrackViewModel)
        }
        
        var album: Album?
        var activeSheet: ActiveSheet = .album
        var showSheet = false
        var isOpenArticle = false
    }
    
    private let useCase: AlbumUseCaseType
    private let eventLogger: EventLoggerType
    private var cancellables = Set<AnyCancellable>()
    private let id: Int
    @Published var state = State()

    init(id: Int,
         useCase: AlbumUseCaseType = AlbumUseCase(),
         eventLogger: EventLoggerType = MiniVibeApp.eventLogger) {
        self.id = id
        self.useCase = useCase
        self.eventLogger = eventLogger
    }
    
    func send(_ input: Input) {
        switch input {
        case .appear:
            load()
        case .showAlbumMenu:
            state.activeSheet = .album
            state.showSheet = true
        case let .showTrackMenu(info):
            state.activeSheet = .track(info: info)
            state.showSheet = true
        case .like:
            like()
        }
    }
    
    private func load() {
        useCase.loadAlbum(with: id)
            .sink { _ in
                
            } receiveValue: { [weak self] album in
                self?.state.album = album
            }
            .store(in: &cancellables)
    }
    
    private func like() {
        eventLogger.send(LikeLog(userId: 0,
                                 data: .init(type: "Album",
                                             id: id),
                                 isLike: true))
    }
}
