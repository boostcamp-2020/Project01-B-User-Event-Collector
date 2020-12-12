//
//  TrackViewModel.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/12.
//

import Combine
import Foundation

final class TrackViewModel: ObservableObject {
    @Published var track: TrackInfo
    private let eventLogger: EventLoggerType
    private let useCase: TrackUseCase
    private var cancellables: Set<AnyCancellable> = []
    
    init(track: TrackInfo, useCase: TrackUseCase = .init(), eventLogger: EventLoggerType) {
        self.track = track
        self.useCase = useCase
        self.eventLogger = eventLogger
    }
    
    func like() {
        if track.liked == 0 {
            useCase.likeTrack(like: LikeTrack(trackId: track.id))
                .sink { _ in
                    
                } receiveValue: { [weak self] isSuccess in
                    guard let self = self else { return }
                    if isSuccess {
                        self.track.liked = 1
                        self.eventLogger.send(LikeLog(userId: 0,
                                                       componentId: "likeButton",
                                                       data: .init(type: "Track", id: self.track.id),
                                                       isLike: true))
                    }
                }
                .store(in: &cancellables)
        } else {
            useCase.cancelLikedTrack(id: track.id)
                .sink { _ in
                    
                } receiveValue: { [weak self] isSuccess in
                    guard let self = self else { return }
                    if isSuccess {
                        self.track.liked = 0
                        self.eventLogger.send(LikeLog(userId: 0,
                                                       componentId: "likeButton",
                                                       data: .init(type: "Track", id: self.track.id),
                                                       isLike: false))
                    }
                }
                .store(in: &cancellables)
        }
    }
}

extension TrackViewModel: Equatable {
    static func == (lhs: TrackViewModel, rhs: TrackViewModel) -> Bool {
        return lhs.track == rhs.track
    }
}

extension TrackViewModel: Hashable {
    func hash(into hasher: inout Hasher) {
        hasher.combine(track)
    }
}
