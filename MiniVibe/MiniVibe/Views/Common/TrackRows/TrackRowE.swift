//
//  TrackRowE.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/03.
//

import SwiftUI
import KingfisherSwiftUI

struct TrackRowE: View {
    @EnvironmentObject private var nowPlaying: NowPlaying
    @StateObject private var viewModel: TrackViewModel
    let order: Int
    
    init(viewModel: TrackViewModel, order: Int) {
        self._viewModel = StateObject(wrappedValue: viewModel)
        self.order = order
    }

    var body: some View {
        HStack {
            let track = viewModel.track
            NavigationLink(destination:
                            AlbumView(viewModel: .init(id: track.album.id, eventLogger: MiniVibeApp.eventLogger))
                            .logTransition(identifier: .album(id: track.album.id),
                                           componentId: .trackRowThumbnail)
            ) {
                TrackRowImage(imageUrl: track.album.imageUrl)
            }
            
            Button {
                nowPlaying.addTrack(track: viewModel)
            } label: {
                TrackRowInfoA(order: order,
                               title: track.title,
                               artist: track.artist.name)
            }
        }
    }
}

struct TrackRowE_Previews: PreviewProvider {
    static var previews: some View {
        HStack {
            TrackRowImage(imageUrl: "")
            TrackRowInfoA(order: 3, title: "마음", artist: "아이유(IU)")
        }
        .previewLayout(.fixed(width: 375, height: 80))
        .previewInAllColorSchemes
    }
}
