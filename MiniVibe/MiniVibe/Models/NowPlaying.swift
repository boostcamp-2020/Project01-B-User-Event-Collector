//
//  NowPlaying.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/02.
//

import SwiftUI

final class NowPlaying: ObservableObject {
    
    enum Destination: Equatable {
        case album(id: Int)
        case playList(title: String, subtitle: String)
        case artist
        
        var view: some View {
            switch self {
            case let .album(id):
                return AnyView(AlbumView(viewModel: AlbumViewModel(id: id)))
            case let .playList(title, subtitle):
                return AnyView(PlayListView(title: title, subtitle: subtitle))
            case .artist:
                return AnyView(ArtistView())
            }
        }
        
        static func == (lhs: Self, rhs: Self) -> Bool {
            switch (lhs, rhs) {
            case let (.album(lhsId), .album(rhsId)):
                return lhsId == rhsId
            case let (.playList(lhsTitle, lhsSubtitle), .playList(rhsTitle, rhsSubtitle)):
                return lhsTitle == rhsTitle && lhsSubtitle == rhsSubtitle
            case (.artist, .artist):
                return true
            default:
                return false
            }
        }
    }
    
    @Published var trackId: Int?
    @Published var isPlayerOpen = false
    @Published var isNavigationActive = false
    @Published var tabItemSelection = 0 {
        didSet {
            isNavigationActive = false
        }
    }
    private(set) var destination: Destination?
    let title = "Dynamite"
    let artist = "방탄소년단"
    
    func setDestination(_ destination: Destination) -> Bool {
        guard !(isNavigationActive && self.destination == destination) else { return false }
        self.destination = destination
        return true
    }
    
}
