//
//  NowPlaying.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/02.
//

import SwiftUI

final class NowPlaying: ObservableObject {
    
    enum Destination {
        case albumPlayList(title: String, subtitle: String)
        case artist
        
        var view: some View {
            switch self {
            case let .albumPlayList(title, subtitle):
                return AnyView(AlbumPlaylistView(title: title, subtitle: subtitle))
            case .artist:
                return AnyView(ArtistView())
            }
        }
    }
    
    @Published var trackId: Int?
    @Published var isPlayerOpen: Bool = false
    @Published var isNavigationActive: Bool = false
    var destination: Destination?
}
