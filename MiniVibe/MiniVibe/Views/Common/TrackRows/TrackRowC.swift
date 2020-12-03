//
//  TrackRowC.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/02.
//

import SwiftUI

struct TrackRowC: View {
    @Binding var isMenuOpen: Bool
    
    let title: String
    let artist: String

    var body: some View {
        HStack {
            NavigationLink(destination: AlbumPlaylistView(title: title, subtitle: artist)) {
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
            
            Spacer()
            
            Button {
                isMenuOpen = true
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
        TrackRowC(isMenuOpen: .constant(false), title: "작은 방 (Feat.아이유)", artist: "스윗소로우")
            .previewLayout(.fixed(width: 375, height: 80))
    }
}
