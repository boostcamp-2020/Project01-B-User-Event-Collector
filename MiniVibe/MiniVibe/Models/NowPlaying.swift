//
//  NowPlaying.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/02.
//

import SwiftUI

final class NowPlaying: ObservableObject {
    
    enum Destination: Equatable {
        case album(title: String, subtitle: String)
        case playList(title: String, subtitle: String)
        case artist
        
        var view: some View {
            switch self {
            case let .album(title, subtitle):
                return AnyView(AlbumView(title: title, subtitle: subtitle))
            case let .playList(title, subtitle):
                return AnyView(PlayListView(title: title, subtitle: subtitle))
            case .artist:
                return AnyView(ArtistView())
            }
        }
    }
    
    @Published var trackId: Int?
    @Published var isPlayerOpen: Bool = false
    @Published var isNavigationActive: Bool = false
    private(set) var destination: Destination?
    
    func setDestination(_ destination: Destination) -> Bool {
        guard !(isNavigationActive && self.destination == destination) else { return false }
        self.destination = destination
        return true
    }
}
