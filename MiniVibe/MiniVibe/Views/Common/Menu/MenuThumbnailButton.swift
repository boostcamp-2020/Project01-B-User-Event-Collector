//
//  MenuThumbnailButton.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/02.
//

import SwiftUI
import KingfisherSwiftUI

struct MenuThumbnailButton: View {
    @EnvironmentObject private var nowPlaying: NowPlaying
    
    var body: some View {

        HStack {
            KFImage(URL(string: nowPlaying.playingTrack?.album.imageUrl ?? ""))
                .resizable()
                .aspectRatio(1, contentMode: .fit)
                .frame(width: 80)

            VStack(alignment: .leading, spacing: 4) {
                Text(nowPlaying.playingTrack?.title ?? "")
                    .font(.system(size: 18, weight: .bold))

                Text(nowPlaying.playingTrack?.artist.name ?? "")
                    .foregroundColor(.secondary)
                    .opacity(nowPlaying.playingTrack?.artist == nil ? 0 : 1)
            }
            .lineLimit(1)
            .padding(.horizontal, 8)

            Spacer()
        }
        .foregroundColor(.black)
        .padding(.horizontal)
    }
    
}

struct MenuThumbnailButton_Previews: PreviewProvider {
    static var previews: some View {
        MenuThumbnailButton()
    }
}
