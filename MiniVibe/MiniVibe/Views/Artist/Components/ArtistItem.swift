//
//  ArtistItem.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/01.
//

import SwiftUI
import KingfisherSwiftUI

struct ArtistItem: View {
    let artist: Artist
    
    var body: some View {
        VStack {
            KFImage(URL(string: artist.imageUrl))
                .resizable()
                .aspectRatio(1, contentMode: .fit)
                .clipShape(Circle())
            
            Text(artist.name)
                .font(.system(size: 17))
                .foregroundColor(.black)
                .lineLimit(2)
            Text("♥︎ 999")
                .font(.system(size: 12))
                .foregroundColor(.secondary)
        }
        .frame(width: 100)
    }
}

struct ArtistItem_Previews: PreviewProvider {
    static var previews: some View {
        ArtistItem(artist: .init(id: 0, name: "", imageUrl: "", genre: .init(name: "")))
    }
}
