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
    @Published var upNext = [Int]() // Track.id
}

// 비어있다면? 기본 값을 보여주어야 하지 않을까
