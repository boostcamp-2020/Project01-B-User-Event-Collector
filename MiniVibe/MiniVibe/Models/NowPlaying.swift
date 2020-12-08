//
//  NowPlaying.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/02.
//

import SwiftUI

final class NowPlaying: ObservableObject {
    
    enum Destination: Equatable {
        case artist
        
        var view: some View {
            switch self {
            case .artist:
                return AnyView(ArtistView())
            }
        }
    }
    
    @Published var trackId: Int?
    @Published var isPlayerOpen = false
    @Published var isNavigationActive = false
    private(set) var destination: Destination?
    let title = "Dynamite"
    let artist = "방탄소년단"
    
    func setDestination(_ destination: Destination) -> Bool {
        guard !(isNavigationActive && self.destination == destination) else { return false }
        self.destination = destination
        return true
    }
    
}
