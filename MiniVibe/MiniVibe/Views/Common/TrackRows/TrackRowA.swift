//
//  TrackRowA.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/11/23.
//

import SwiftUI

struct TrackRowA: View {
    @Binding var isMenuOpen: Bool
    
    let order: Int
    let title: String
    let artist: String

    var body: some View {
        HStack {
            NavigationLink(destination: AlbumPlaylistView(title: title, subtitle: artist)) {
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
            
            Button {
                isMenuOpen = true
            } label: {
                Image(systemName: "ellipsis")
                    .foregroundColor(.black)
                    .padding()
            }
        }
    }
}

struct TrackRow_Previews: PreviewProvider {
    static var previews: some View {
        TrackRowA(isMenuOpen: .constant(false), order: 4, title: "Dynamite", artist: "방탄소년단")
            .previewLayout(.fixed(width: 375, height: 80))
    }
}
