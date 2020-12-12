//
//  TrackRowD.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/02.
//

import SwiftUI

struct TrackRowD: View {
    @EnvironmentObject private var nowPlaying: NowPlaying
    @StateObject private var viewModel: TrackViewModel
    private let order: Int
    private let menuButtonAction: (TrackViewModel) -> Void

    init(viewModel: TrackViewModel, order: Int, menuButtonAction: @escaping (TrackViewModel) -> Void) {
        self._viewModel = StateObject(wrappedValue: viewModel)
        self.order = order
        self.menuButtonAction = menuButtonAction
    }
    
    var body: some View {
        HStack {
            Button {
                nowPlaying.addTrack(track: viewModel)
            } label: {
                TrackRowInfoC(order: order, title: viewModel.track.title)
            }
            
            Spacer()
            
            Button {
                menuButtonAction(viewModel)
            } label: {
                Image(systemName: "ellipsis")
            }
            .padding()
        }
        .foregroundColor(.primary)
        .padding(.vertical, 8)
    }
}

struct TrackRowD_Previews: PreviewProvider {
    static var previews: some View {
        HStack {
            TrackRowInfoC(order: 1, title: "How You Like That")
            Spacer()
            Image(systemName: "ellipsis")
                .padding()
        }
        .foregroundColor(.primary)
        .padding(.vertical, 8)
        .previewLayout(.fixed(width: 375, height: 80))
        .previewInAllColorSchemes
    }
}
