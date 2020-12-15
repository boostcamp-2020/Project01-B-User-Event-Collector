//
//  ArtistThumbnail.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/01.
//

import SwiftUI
import KingfisherSwiftUI

struct ArtistThumbnail: View {
    let artist: ArtistInfo
    
    var body: some View {
        ZStack(alignment: .bottomLeading) {
            KFImage(URL(string: artist.imageUrl))
                .placeholder {
                    Image("placeholder")
                        .resizable()
                }
                .scaledToFit()
            
            VStack(alignment: .leading) {
                Text(artist.name)
                    .font(.system(size: 32, weight: .bold))
                Text(artist.genre.name)
                    .font(.system(size: 14))
            }
            .foregroundColor(.white)
            .padding()
        }
        .ignoresSafeArea(edges: .top)
    }
}

struct ArtistThumbnail_Previews: PreviewProvider {
    static var previews: some View {
        VStack {
            ArtistThumbnail(artist: .init(id: 0,
                                          name: "",
                                          imageUrl: "",
                                          genre: .init(name: ""),
                                          tracks: [],
                                          albums: []))
            Spacer()
        }
    }
}
