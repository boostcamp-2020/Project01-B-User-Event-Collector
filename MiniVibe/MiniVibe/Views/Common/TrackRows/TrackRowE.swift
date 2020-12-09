//
//  TrackRowE.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/03.
//

import SwiftUI

struct TrackRowE: View {
    @EnvironmentObject private var nowPlaying: NowPlaying
    let order: Int
    let track: TrackInfo

    var body: some View {
        HStack {
            NavigationLink(destination: AlbumView(id: track.album.id)) {
                AsyncImage(urlString: track.album.imageUrl)
                    .frame(width: 50, height: 50)
                    .border(Color.gray, width: 0.7)
            }
            
            Button {
                nowPlaying.addTrack(track: track)
            } label: {
                Text("\(order)")
                    .font(.title3)
                    .padding(.horizontal, 4)
                    .foregroundColor(.black)
                
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

struct TrackRowE_Previews: PreviewProvider {
    static var previews: some View {
        TrackRowE(order: 3, track: trackinfo)
            .previewLayout(.fixed(width: 375, height: 80))
    }
}
