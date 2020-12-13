//
//  TrackRowC.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/02.
//

import SwiftUI
import KingfisherSwiftUI

struct TrackRowC: View {
    @EnvironmentObject private var nowPlaying: NowPlaying
    @StateObject private var viewModel: TrackViewModel
    private let menuButtonAction: (TrackViewModel) -> Void

    init(viewModel: TrackViewModel, menuButtonAction: @escaping (TrackViewModel) -> Void) {
        self._viewModel = StateObject(wrappedValue: viewModel)
        self.menuButtonAction = menuButtonAction
    }
    
    var body: some View {
        HStack {
            let track = viewModel.track
            NavigationLink(destination:
                            AlbumView(viewModel: .init(id: track.album.id))
                            .logTransition(identifier: .album(id: track.album.id),
                                           componentId: .trackRowThumbnail)
            ) {
                TrackRowImage(imageUrl: viewModel.track.album.imageUrl)
            }
            
            Button {
                nowPlaying.addTrack(track: viewModel)
            } label: {
                TrackRowInfoB(title: viewModel.track.title,
                              artist: viewModel.track.artist.name)
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
