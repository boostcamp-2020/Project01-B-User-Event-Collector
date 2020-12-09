//
//  NowPlaying.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/08.
//

import Foundation

class NowPlaying: ObservableObject {
    
    @Published var isPlaying: Bool = false
    @Published var isPlayerPresented: Bool = false
    @Published var upNext = [TrackInfo]()
    @Published var selectedTracks = Set<TrackInfo>()
    var playingTrack: TrackInfo? {
        return upNext.first
    }
    
    func addTrack(track: TrackInfo) {
        isPlaying = true
        if let index = upNext.firstIndex(of: track) {
            upNext.insert(upNext.remove(at: index), at: 0)
        } else {
            upNext.insert(track, at: 0)
        }
    }
    
    func playNextTrack() {
        isPlaying = true
        upNext.insert(upNext.remove(at: 0), at: upNext.count)
    }

}
