//
//  TrackRowA.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/11/23.
//

import SwiftUI
import KingfisherSwiftUI

struct TrackRowA: View {
    @EnvironmentObject private var nowPlaying: NowPlaying
    @State private var isMenuOpen = false
    
    let order: Int
    let track: TrackInfo
    
    var body: some View {
        HStack {
            NavigationLink(destination: AlbumView(id: track.album.id)) {
                KFImage(URL(string: track.album.imageUrl))
                    .resizable()
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
        TrackRowA(order: 0, track: trackinfo)
            .previewLayout(.fixed(width: 375, height: 80))
    }
}
