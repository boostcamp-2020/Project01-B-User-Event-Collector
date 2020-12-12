//
//  AlbumViewModel.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/07.
//

import Combine

final class AlbumViewModel: ObservableObject {
    enum Input {
        case appear
        case showAlbumMenu
        case showTrackMenu(info: TrackViewModel)
        case like
    }
    
    enum ActiveSheet {
        case album
        case track(info: TrackViewModel)
    }
    
    private let useCase = AlbumUseCase()
    private let eventLogger: EventLoggerType
    private var cancellables = Set<AnyCancellable>()
    private let id: Int
    @Published private(set) var album: Album?
    @Published private(set) var activeSheet: ActiveSheet = .album
    @Published var showSheet = false
    @Published var isOpenArticle = false
    
    init(id: Int, eventLogger: EventLoggerType) {
        self.id = id
        self.eventLogger = eventLogger
    }
    
    func send(_ input: Input) {
        switch input {
        case .appear:
            load()
        case .showAlbumMenu:
            activeSheet = .album
            showSheet = true
        case let .showTrackMenu(info):
            activeSheet = .track(info: info)
            showSheet = true
        case .like:
            like()
        }
    }
    
    private func load() {
        useCase.loadAlbum(with: id)
            .sink { _ in
                
            } receiveValue: { [weak self] album in
                self?.album = album
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
