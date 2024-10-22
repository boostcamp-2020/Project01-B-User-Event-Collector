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
    enum Input {
        case like
    }
    struct State {
        var track: TrackInfo
    }

    @Published var state: State
    private let eventLogger: EventLoggerType
    private let useCase: TrackUseCaseType
    private var cancellables: Set<AnyCancellable> = []
    
    init(track: TrackInfo,
         useCase: TrackUseCaseType = TrackUseCase(),
         eventLogger: EventLoggerType = MiniVibeApp.eventLogger) {
        
        self.useCase = useCase
        self.eventLogger = eventLogger
        state = State(track: track)
    }
    
    func send(_ input: Input) {
        switch input {
        case .like:
            state.track.liked == 0 ? like() : cancelLike()
        }
    }
    
    private func like() {
        useCase.likeTrack(id: state.track.id)
            .sink { _ in
                
            } receiveValue: { [weak self] isSuccess in
                guard let self = self else { return }
                if isSuccess {
                    self.state.track.liked = 1
                    self.eventLogger.send(LikeLog(userId: 0,
                                                  data: .init(type: "Track", id: self.state.track.id),
                                                  isLike: true))
                }
            }
            .store(in: &cancellables)
    }
    
    private func cancelLike() {
        useCase.cancelLikedTrack(id: state.track.id)
            .sink { _ in
                
            } receiveValue: { [weak self] isSuccess in
                guard let self = self else { return }
                if isSuccess {
                    self.state.track.liked = 0
                    self.eventLogger.send(LikeLog(userId: 0,
                                                  data: .init(type: "Track", id: self.state.track.id),
                                                  isLike: false))
                }
            }
            .store(in: &cancellables)
    }

}

extension TrackViewModel: Equatable {
    static func == (lhs: TrackViewModel, rhs: TrackViewModel) -> Bool {
        return lhs.state.track == rhs.state.track
    }
}

extension TrackViewModel: Hashable {
    func hash(into hasher: inout Hasher) {
        hasher.combine(state.track)
    }
}
