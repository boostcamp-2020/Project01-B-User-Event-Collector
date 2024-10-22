//
//  TrackRowC.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/02.
//

import SwiftUI
import KingfisherSwiftUI

struct TrackRowC: View {
    @EnvironmentObject private var nowPlaying: NowPlayingViewModel
    @StateObject private var viewModel: TrackViewModel
    private let menuButtonAction: (TrackViewModel) -> Void

    init(viewModel: TrackViewModel, menuButtonAction: @escaping (TrackViewModel) -> Void) {
        self._viewModel = StateObject(wrappedValue: viewModel)
        self.menuButtonAction = menuButtonAction
    }
    
    var body: some View {
        HStack {
            let track = viewModel.state.track
            NavigationLink(destination:
                            AlbumView(viewModel: .init(id: track.album.id, eventLogger: MiniVibeApp.eventLogger))
                            .logTransition(identifier: .album(id: track.album.id),
                                           componentId: .trackRowThumbnail)
            ) {
                TrackRowImage(imageUrl: viewModel.state.track.album.imageUrl)
            }
            
            Button {
                nowPlaying.send(.add(track: viewModel))
            } label: {
                TrackRowInfoB(title: viewModel.state.track.title,
                              artist: viewModel.state.track.artist.name)
                Spacer()
            }
            
            Button {
                menuButtonAction(viewModel)
            } label: {
                TrackRowMenu()
            }
        }
        .padding(.vertical, 8)
    }
}

struct TrackRowC_Previews: PreviewProvider {
    static var previews: some View {
        HStack {
            TrackRowImage(imageUrl: "")
            TrackRowInfoB(title: "이문세", artist: "붉은 노을")
            Spacer()
            TrackRowMenu()
        }
        .previewLayout(.fixed(width: 375, height: 80))
        .previewInAllColorSchemes
    }
}
