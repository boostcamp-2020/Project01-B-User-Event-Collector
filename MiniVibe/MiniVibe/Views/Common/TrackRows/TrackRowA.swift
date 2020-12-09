//
//  TrackRowA.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/11/23.
//

import SwiftUI

struct TrackRowA: View {
    @State private var isMenuOpen = false
    let order: Int
    let track: TrackInfo

    var body: some View {
        HStack {
            NavigationLink(destination: AlbumView(id: track.album.id)) {
                AsyncImage(urlString: track.album.imageUrl)
                    .frame(width: 50, height: 50)
                    .border(Color.gray, width: 0.7)
            }
            
            HStack(alignment: .top) {
                Text("\(order)")
                    .font(.title3)
                    .padding(.horizontal, 4)
                
                VStack(alignment: .leading, spacing: 4) {
                    Text(track.title)
                        .font(.title3)
                    
                    Text(track.artist.name)
                        .font(.subheadline)
                        .foregroundColor(.secondary)
                }
            }
            .scaledToFit()
            
            Spacer()
            
            Button {
                isMenuOpen = true
            } label: {
                Image(systemName: "ellipsis")
                    .foregroundColor(.black)
                    .padding()
            }
        }
        .fullScreenCover(isPresented: $isMenuOpen) {
            PlayerMenu(track: track)
        }
    }
}

struct TrackRow_Previews: PreviewProvider {
    static var previews: some View {
        TrackRowA(order: 0, track: .init(id: 0, title: "", lyrics: "", albumId: 0, album: .init(id: 0, title: "", imageUrl: ""), artist: .init(id: 0, name: "")))
            .previewLayout(.fixed(width: 375, height: 80))
    }
}
