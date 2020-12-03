//
//  LibraryArtistRow.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/03.
//

import SwiftUI

struct LibraryArtistRow: View {
    let artist: String
    
    var body: some View {
        HStack {
            Image("artist")
                .resizable()
                .aspectRatio(1, contentMode: .fit)
                .frame(width: 60)
                .clipShape(Circle())
            Text(artist)
            Spacer()
        }
    }
}

struct LibraryArtistRow_Previews: PreviewProvider {
    static var previews: some View {
        LibraryArtistRow(artist: "방탄소년단")
    }
}
