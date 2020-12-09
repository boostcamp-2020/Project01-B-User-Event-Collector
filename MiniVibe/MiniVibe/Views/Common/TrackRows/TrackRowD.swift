//
//  TrackRowD.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/02.
//

import SwiftUI

struct TrackRowD: View {
    @EnvironmentObject private var nowPlaying: NowPlaying
    let order: Int
    let title: String
    let artist: String
    let menuButtonAction: () -> Void

    var body: some View {
        HStack {
            HStack {
                Text("\(order)")
                    .font(.title3)
                    .bold()
                    .padding(.horizontal, 4)
                
                Text(title)
                    .font(.title3)
            }
            .padding(.vertical, 10)
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

struct TrackRowD_Previews: PreviewProvider {
    static var previews: some View {
        TrackRowD(order: 1, title: "작은 방 (Feat.아이유)", artist: "스윗소로우", menuButtonAction: { })
            .previewLayout(.fixed(width: 375, height: 80))
    }
}
