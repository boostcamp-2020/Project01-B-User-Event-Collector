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
                KFImage(URL(string: viewModel.track.album.imageUrl))
                    .resizable()
                    .frame(width: 50, height: 50)
                    .border(Color.gray, width: 0.7)
            }
            
            Button {
                nowPlaying.addTrack(track: viewModel)
            } label: {
                VStack(alignment: .leading, spacing: 4) {
                    Spacer()
                    Text(viewModel.track.title)
                        .font(.system(size: 17))
                        .foregroundColor(.black)
                        
                    Text(viewModel.track.artist.name)
                        .font(.system(size: 13))
                        .foregroundColor(.secondary)
                    Spacer()
                }
                Spacer()
            }
            
            Button {
                menuButtonAction(viewModel)
            } label: {
                Image(systemName: "ellipsis")
                    .foregroundColor(.black)
                    .padding()
            }
        }
        .padding(.vertical, 8)
    }
}

struct TrackRowC_Previews: PreviewProvider {
    static var previews: some View {
        TrackRowC(viewModel: .init(track: trackinfo), menuButtonAction: { _ in })
            .previewLayout(.fixed(width: 375, height: 80))
    }
}
