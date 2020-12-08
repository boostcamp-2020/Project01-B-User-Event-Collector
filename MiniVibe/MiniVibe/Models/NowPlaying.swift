//
//  NowPlaying.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/08.
//

import Foundation

class NowPlaying: ObservableObject {
    struct UpNextTrack {
        let id: Int
        let title: String
        let artist: Artist
        let imageUrl: String
    }
    
    @Published var isPlaying: Bool = false
    @Published var isPlayerPresented: Bool = false
    @Published var upNext = [UpNextTrack]()
}
