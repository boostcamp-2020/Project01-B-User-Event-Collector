//
//  NowPlaying.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/08.
//

import Combine
import Foundation
import EventLogKit

final class NowPlayingViewModel: ObservableObject {
    
    enum Input {
        case launch
        case resignActive
        case playButtonTapped
        case playNext
        case add(track: TrackViewModel)
        case deleteSelectedTracks
        case togglePlayer
        case selectButtonTapped
        case moveTrack(source: IndexSet, destination: Int)
    }
    
    struct State {
        var isPlaying: Bool = false
        var isPlayerPresented: Bool = false
        var upNext = [TrackViewModel]()
        var selectedTracks = Set<TrackViewModel>()
    }
    
    private let eventLogger: EventLoggerType
    private let dataManager: PlayerDataManagerType
    private var cancellables = Set<AnyCancellable>()
    var playingTrack: TrackViewModel? {
        return state.upNext.first
    }
    var isEmptyUpNext: Bool {
        return state.upNext.isEmpty
    }
    var isEmptySelects: Bool {
        return state.selectedTracks.isEmpty
    }
    var isAllSelected: Bool {
        return state.selectedTracks.count == state.upNext.count
    }
    @Published var state = State()
    
    init(dataManager: PlayerDataManagerType = PlayerDataManager(),
         eventLogger: EventLoggerType = MiniVibeApp.eventLogger) {
        self.dataManager = dataManager
        self.eventLogger = eventLogger
    }
    
    func send(_ input: Input) {
        switch input {
        case .launch:
            load()
        case .resignActive:
            save()
        case .playButtonTapped:
            togglePlayState()
        case .playNext:
            playNextTrack()
        case let .add(track):
            add(track: track)
        case .deleteSelectedTracks:
            deleteTrack()
        case .togglePlayer:
            togglePlayer()
        case .selectButtonTapped:
            isAllSelected ? deselectAll() : selectAll()
        case let .moveTrack(source, destination):
            moveTrack(source: source, destination: destination)
        }
    }
    
    private func load() {
        state.upNext = dataManager.fetch()
    }
    
    private func save() {
        dataManager.saveTracks(tracks: state.upNext)
    }
    
    private func add(track: TrackViewModel) {
        state.isPlaying = true
        eventLogger.send(PlayLog(userId: 0,
                                 trackId: track.state.track.id,
                                 componentId: "TrackRow",
                                 isPlay: true))
        if let index = state.upNext.firstIndex(of: track) {
            state.upNext.insert(state.upNext.remove(at: index), at: 0)
        } else {
            state.upNext.insert(track, at: 0)
            eventLogger.send(AddToUpnext(userId: 0,
                                         trackId: [track.state.track.id],
                                         componentId: "AddTrackButton"))
        }
    }
    
    private func deleteTrack() {
        eventLogger.send(RemoveFromUpnext(userId: 0,
                                     trackId: state.selectedTracks.map(\.state.track.id),
                                     componentId: "DeleteTrackButton"))
        state.selectedTracks.forEach { track in
            guard let index = state.upNext.firstIndex(of: track) else {
                state.selectedTracks.removeAll()
                return
            }
            state.upNext.remove(at: index)
        }
        state.selectedTracks.removeAll()
    }
    
    private func playNextTrack() {
        guard state.upNext.count > 1 else { return }
        state.isPlaying = true
        state.upNext.insert(state.upNext.remove(at: 0), at: state.upNext.count)
        guard let track = playingTrack?.state.track else { return }
        eventLogger.send(PlayLog(userId: 0,
                                 trackId: track.id,
                                 componentId: "NextButton",
                                 isPlay: true))
    }
    
    private func selectAll() {
        state.selectedTracks = Set(state.upNext)
    }
    
    private func deselectAll() {
        state.selectedTracks.removeAll()
    }
    
    private func moveTrack(source: IndexSet, destination: Int) {
        guard let sourceIndex = source.first,
              sourceIndex < state.upNext.count,
              destination <= state.upNext.count else { return }
        state.upNext.move(fromOffsets: source, toOffset: destination)
        let destinationIndex = sourceIndex < destination ?  destination - 1 : destination
        if sourceIndex != destinationIndex {
            eventLogger.send(MoveTrackLog(userId: 0,
                                          trackId: state.upNext[destinationIndex].state.track.id,
                                          source: sourceIndex,
                                          destination: destinationIndex))
        }
    }
    
    private func togglePlayState() {
        guard let track = playingTrack?.state.track else { return }
        state.isPlaying.toggle()
        eventLogger.send(PlayLog(userId: 0,
                                 trackId: track.id,
                                 componentId: "PlayButton",
                                 isPlay: state.isPlaying))
    }
    
    private func togglePlayer() {
        if isEmptyUpNext, !state.isPlayerPresented {
            return
        }
        state.isPlayerPresented.toggle()
    }
}
