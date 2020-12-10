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
    let usecase = TrackUseCase()
    var cancellables = Set<AnyCancellable>()
    
    func addTrack(track: TrackInfo) {
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
    
    func likeTrack(id: Int) {
        usecase.likeTrack(like: LikeTrack(trackId: id)) //sink로 받고 에러처리만 하면 될 듯?
            .sink { _ in
                
            } receiveValue: { _ in
                
            }
            .store(in: &cancellables)
        upNext[0].liked = 1
    }
    
    func cancelLikedTrack(id: Int) {
        usecase.cancelLikedTrack(id: id)
            .sink { _ in
                
            } receiveValue: { _ in
                
            }
            .store(in: &cancellables)
        upNext[0].liked = 0
    }

}
