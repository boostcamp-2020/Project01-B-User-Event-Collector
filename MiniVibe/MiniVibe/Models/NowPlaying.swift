//
//  NowPlaying.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/08.
//

import Foundation
import Combine

final class NowPlaying: ObservableObject {
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
    
    func deleteTrack() {
        selectedTracks.forEach { upNext.remove(at: upNext.firstIndex(of: $0) ?? -1) }
        
    }
    
    func playNextTrack() {
        isPlaying = true
        upNext.insert(upNext.remove(at: 0), at: upNext.count)
    }
    
    func likeTrack(id: Int) {
        let usecase = TrackUseCase()
        var cancellables = Set<AnyCancellable>()
        usecase.likeTrack(like: LikeTrack(trackId: id)) //sink로 받고 에러처리만 하면 될 듯?
            .sink { result in
                print(result)
            } receiveValue: { _ in
                
            }
            .store(in: &cancellables)
        upNext[0].liked = 1
    }
    
    func cancelLikedTrack(id: Int) {
        let usecase = TrackUseCase()
        var cancellables = Set<AnyCancellable>()
        usecase.cancelLikedTrack(id: id)
            .sink { result in
                print(result)
            } receiveValue: { _ in
                
            }
            .store(in: &cancellables)
        upNext[0].liked = 0
    }

}
