//
//  TrackRowA.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/11/23.
//

import SwiftUI
import KingfisherSwiftUI

struct TrackRowA: View {
    @EnvironmentObject private var nowPlaying: NowPlaying
    @StateObject private var viewModel: TrackViewModel
    @State private var isMenuOpen = false
    private let order: Int
    
    init(viewModel: TrackViewModel, order: Int) {
        self._viewModel = StateObject(wrappedValue: viewModel)
        self.order = order
    }
    
    var body: some View {
        let track = viewModel.track
        HStack {
            NavigationLink(destination:
                            AlbumView(viewModel: .init(id: track.album.id))
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
            
            Button {
                isMenuOpen = true
            } label: {
                TrackRowMenu()
            }
        }
        .fullScreenCover(isPresented: $isMenuOpen) {
            PlayerMenu(viewModel: viewModel)
        }
    }
}

struct TrackRow_Previews: PreviewProvider {
    static var previews: some View {
        HStack {
            TrackRowImage(imageUrl: "")
            TrackRowInfoA(order: 1, title: "마음", artist: "아이유")
            TrackRowMenu()
        }
        .previewLayout(.fixed(width: 375, height: 80))
        .previewInAllColorSchemes
    }
}
