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
    @Published var upNext = [UpNextTrack]()
    @Published var selectedTracks = Set<UpNextTrack>()
}

struct UpNextTrack: Hashable {
    let id: Int
    let title: String
    let artist: TrackInfo.Artist
    let imageUrl: String
    
    func hash(into hasher: inout Hasher) {
        hasher.combine(id)
    }
    
    static func == (lhs: UpNextTrack, rhs: UpNextTrack) -> Bool {
        return lhs.id == rhs.id
    }
}
