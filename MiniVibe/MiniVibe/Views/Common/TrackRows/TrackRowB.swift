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
                KFImage(URL(string: track.album.imageUrl))
                    .resizable()
                    .frame(width: 50, height: 50)
                    .border(Color.gray, width: 0.7)
            }
            
            Button {
                nowPlaying.addTrack(track: viewModel)
            } label: {
                VStack(alignment: .leading, spacing: 4) {
                    Spacer()
                    Text(track.title)
                        .font(.system(size: 17))
                        .foregroundColor(.black)
                        
                    Text(track.artist.name)
                        .font(.system(size: 13))
                        .foregroundColor(.secondary)
                    Spacer()
                }
                Spacer()
            }
        }
    }
}

struct TrackRowB_Previews: PreviewProvider {
    static var previews: some View {
        TrackRowB(viewModel: .init(track: trackinfo, eventLogger: EventLogger(persistentContainer: .init())))
            .previewLayout(.fixed(width: 375, height: 80))
    }
}
