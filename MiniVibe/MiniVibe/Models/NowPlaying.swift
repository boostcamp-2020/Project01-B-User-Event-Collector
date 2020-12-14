//
//  NowPlaying.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/08.
//

import Foundation
import Combine

final class NowPlaying: ObservableObject {
    //let defaultTracks: [TrackInfo]?
    @Published var isPlaying: Bool = false
    @Published var isPlayerPresented: Bool = false
    @Published var upNext = [TrackViewModel]()
    @Published var selectedTracks = Set<TrackViewModel>()
 
    var playingTrack: TrackViewModel? {
        return upNext.first
    }
    let usecase = TrackUseCase()
    var cancellables = Set<AnyCancellable>()
    
    func addTrack(track: TrackViewModel) {
        isPlaying = true
        if let index = upNext.firstIndex(of: track) {
            upNext.insert(upNext.remove(at: index), at: 0)
        } else {
            upNext.insert(track, at: 0)
        }
    }
    
    func deleteTrack() {
        selectedTracks.forEach { track in
            guard let index = upNext.firstIndex(of: track) else {
                selectedTracks.removeAll()
                return
            }
            upNext.remove(at: index)
        }
    }
    
    func playNextTrack() {
        isPlaying = true
        upNext.insert(upNext.remove(at: 0), at: upNext.count)
    }
}
