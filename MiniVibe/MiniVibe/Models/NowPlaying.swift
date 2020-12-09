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
    
    func addTrack(track: TrackInfo) {
        if !upNext.contains(track) {
            upNext.append(track)
        } else {
            if let index = upNext.firstIndex(of: track) {
                upNext.remove(at: index)
            }
            upNext.insert(track, at: 0)
        }
    }
}
