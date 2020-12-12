//
//  TrackRowB.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/02.
//

import SwiftUI
import KingfisherSwiftUI

struct TrackRowB: View {
    @EnvironmentObject private var eventLogger: EventLogger
    @EnvironmentObject private var nowPlaying: NowPlaying
    @StateObject private var viewModel: TrackViewModel
    
    init(viewModel: TrackViewModel) {
        self._viewModel = StateObject(wrappedValue: viewModel)
    }

    var body: some View {
        let track = viewModel.track
        HStack {
            NavigationLink(destination:
                            AlbumView(viewModel: .init(id: track.album.id,
                                                       eventLogger: eventLogger))
                            .logTransition(eventLogger: eventLogger,
                                            identifier: .album(id: track.album.id),
                                            componentId: .trackRowThumbnail)
            ) {
                TrackRowImage(imageUrl: track.album.imageUrl)
            }
            
            Button {
                nowPlaying.addTrack(track: viewModel)
            } label: {
                TrackRowInfoB(title: track.title, artist: track.artist.name)
                Spacer()
            }
        }
    }
}

struct TrackRowB_Previews: PreviewProvider {
    static var previews: some View {
        HStack {
            TrackRowImage(imageUrl: "")
            TrackRowInfoB(title: "붉은 노을", artist: "이문세")
            Spacer()
        }
        .previewLayout(.fixed(width: 375, height: 80))
        .previewInAllColorSchemes
    }
}
