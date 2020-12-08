//
//  TrackRowE.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/03.
//

import SwiftUI

struct TrackRowE: View {
    let order: Int
    let title: String
    let artist: String

    var body: some View {
        HStack {
            NavigationLink(destination: AlbumView(id: 11)) {
                Image("album")
                    .trackRowImageConfigure()
            }
            
            HStack(alignment: .top) {
                Text("\(order)")
                    .font(.title3)
                    .padding(.horizontal, 4)
                
                VStack(alignment: .leading, spacing: 4) {
                    Text(title)
                        .font(.title3)
                    
                    Text(artist)
                        .font(.subheadline)
                        .foregroundColor(.secondary)
                }
            }
            .scaledToFit()
            
            Spacer()
        }
    }
}

struct TrackRowE_Previews: PreviewProvider {
    static var previews: some View {
        TrackRowE(order: 3, title: "Dynamite", artist: "방탄소년단")
            .previewLayout(.fixed(width: 375, height: 80))
    }
}
