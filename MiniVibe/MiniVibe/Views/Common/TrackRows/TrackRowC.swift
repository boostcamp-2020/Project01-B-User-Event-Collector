//
//  TrackRowC.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/02.
//

import SwiftUI

struct TrackRowC: View {
    @EnvironmentObject private var nowPlaying: NowPlaying
    let track: TrackInfo
    let menuButtonAction: () -> Void

    var body: some View {
        HStack {
            NavigationLink(destination: AlbumView(id: 11)) {
                Image("album")
                    .trackRowImageConfigure()
            }
            
            Button {
                nowPlaying.addTrack(track: track)
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
            
            Button {
                menuButtonAction()
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
        TrackRowC(track: trackinfo, menuButtonAction: {})
            .previewLayout(.fixed(width: 375, height: 80))
    }
}
