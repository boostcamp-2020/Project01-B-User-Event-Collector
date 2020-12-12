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
                HStack {
                    HStack {
                        Text("\(order)")
                            .font(.title3)
                            .bold()
                            .padding(.horizontal, 4)
                        
                        Text(viewModel.track.title)
                            .font(.title3)
                    }
                    .padding(.vertical, 10)
                }
            }
            
            Spacer()
            
            Button {
                menuButtonAction(viewModel)
            } label: {
                Image(systemName: "ellipsis")
            }
            .padding()
        }
        .foregroundColor(.black)
        .padding(.vertical, 8)
    }
}

struct TrackRowD_Previews: PreviewProvider {
    static var previews: some View {
        TrackRowD(viewModel: .init(track: trackinfo), order: 1, menuButtonAction: { _ in })
            .previewLayout(.fixed(width: 375, height: 80))
    }
}
