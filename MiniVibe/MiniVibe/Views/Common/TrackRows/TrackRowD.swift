//
//  TrackRowD.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/02.
//

import SwiftUI

struct TrackRowD: View {
    @EnvironmentObject private var nowPlaying: NowPlaying
    let track: TrackInfo
    let order: Int
    let menuButtonAction: () -> Void

    var body: some View {
        HStack {
            Button {
                nowPlaying.addTrack(track: track)
            } label: {
                HStack {
                    HStack {
                        Text("\(order)")
                            .font(.title3)
                            .bold()
                            .padding(.horizontal, 4)
                        
                        Text(track.title)
                            .font(.title3)
                    }
                    .padding(.vertical, 10)
                }
            }
            
            Spacer()
            
            Button {
                menuButtonAction()
            } label: {
                Image(systemName: "ellipsis")
                    .foregroundColor(.black)
            }
            .padding()
        }
        .padding(.vertical, 8)
    }
}

struct TrackRowD_Previews: PreviewProvider {
    static var previews: some View {
        TrackRowD(track: trackinfo, order: 1, menuButtonAction: {})
            .previewLayout(.fixed(width: 375, height: 80))
    }
}
