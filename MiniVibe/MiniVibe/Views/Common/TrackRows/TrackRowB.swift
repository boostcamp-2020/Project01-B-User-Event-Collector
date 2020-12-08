//
//  TrackRowB.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/02.
//

import SwiftUI

struct TrackRowB: View {
    let track: TrackInfo

    var body: some View {
        HStack {
            NavigationLink(destination: AlbumView(id: track.albumId ?? 0)) {
                AsyncImage(urlString: track.album.imageUrl)
                    .frame(width: 50, height: 50)
                    .border(Color.gray, width: 0.7)
            }
            
            VStack(alignment: .leading, spacing: 4) {
                Text(track.title)
                    .font(.system(size: 17))
                Text(track.artist.name)
                    .font(.system(size: 13))
                    .foregroundColor(.secondary)
            }
            
            Spacer()
        }
    }
}

struct TrackRowB_Previews: PreviewProvider {
    static var previews: some View {
        TrackRowB(track: .init(id: 0, title: "", lyrics: "", albumId: 0, album: .init(id: 0, title: "", imageUrl: ""), artist: .init(id: 0, name: "")))
            .previewLayout(.fixed(width: 375, height: 80))
    }
}
