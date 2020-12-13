//
//  TrackViewModel.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/12.
//

import Combine
import Foundation
import EventLogKit

final class TrackViewModel: ObservableObject {
    @Published var track: TrackInfo
    private let eventLogger: EventLoggerType
    private let useCase: TrackUseCaseType
    private var cancellables: Set<AnyCancellable> = []
    
    init(track: TrackInfo, useCase: TrackUseCaseType = TrackUseCase(), eventLogger: EventLoggerType) {
        self.track = track
        self.useCase = useCase
        self.eventLogger = eventLogger
    }
    
    func like() {
        if track.liked == 0 {
            useCase.likeTrack(id: track.id)
                .sink { _ in
                    
                } receiveValue: { [weak self] isSuccess in
                    guard let self = self else { return }
                    if isSuccess {
                        self.track.liked = 1
                        self.eventLogger.send(LikeLog(userId: 0,
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
