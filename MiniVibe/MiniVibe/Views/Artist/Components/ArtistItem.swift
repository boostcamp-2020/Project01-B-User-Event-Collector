//
//  ArtistItem.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/01.
//

import SwiftUI

struct ArtistItem: View {
    var body: some View {
        VStack {
            Image("artist")
                .resizable()
                .aspectRatio(1, contentMode: .fit)
                .clipShape(Circle())
            
            Text("방탄소년단")
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
        ArtistItem()
    }
}
