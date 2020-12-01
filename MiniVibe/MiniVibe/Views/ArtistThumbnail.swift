//
//  ArtistThumbnail.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/01.
//

import SwiftUI

struct ArtistThumbnail: View {
    var body: some View {
        ZStack(alignment: .bottomLeading) {
            Image("artist")
                .resizable()
                .scaledToFit()
            
            VStack(alignment: .leading) {
                Text("방탄소년단")
                    .font(.system(size: 32, weight: .bold))
                Text("댄스, 랩/힙합 • 2013.6.12 • 좋아요 999")
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
            ArtistThumbnail()
            Spacer()
        }
    }
}
