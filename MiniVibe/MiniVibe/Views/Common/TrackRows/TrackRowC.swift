//
//  TrackRowC.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/02.
//

import SwiftUI

struct TrackRowC: View {
    @EnvironmentObject private var nowPlaying: NowPlaying
    let title: String
    let artist: String
    let menuButtonAction: () -> Void

    var body: some View {
        HStack {
            NavigationLink(destination: AlbumView(id: 11)) {
                Image("album")
                    .trackRowImageConfigure()
            }
            
            VStack(alignment: .leading, spacing: 4) {
                Text(title)
                    .font(.title3)
                Text(artist)
                    .font(.subheadline)
                    .foregroundColor(.secondary)
            }
            // let track: TrackInfo 와 같이 생기면 아래 onTapGesture 추가하기
                // upnext에 추가하는 코드임
//            .onTapGesture {
//                nowPlaying.upNext.append(track.id)
//            }
            
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

struct TrackRowC_Previews: PreviewProvider {
    static var previews: some View {
        TrackRowC(title: "작은 방 (Feat.아이유)", artist: "스윗소로우", menuButtonAction: { })
            .previewLayout(.fixed(width: 375, height: 80))
    }
}
