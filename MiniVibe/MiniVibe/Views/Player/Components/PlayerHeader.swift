//
//  PlayerHeader.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/11/30.
//

import SwiftUI

struct PlayerHeader: View {
    let title: String
    @EnvironmentObject private var nowPlaying: NowPlayingViewModel
    
    var body: some View {
        HStack {
            Button {
                
            } label: {
                Image(systemName: "slider.horizontal.3")
            }
            
            Spacer()
            
            Text(title)
            
            Spacer()
            
            Button {
                nowPlaying.send(.togglePlayer)
            } label: {
                Image(systemName: "chevron.compact.down")
            }
            .padding(.vertical)
        }
        .foregroundColor(.primary)
        .padding(8)
    }
}

struct PlayerHeader_Previews: PreviewProvider {
    static var previews: some View {
        PlayerHeader(title: "오늘 Top 100")
            .previewLayout(.fixed(width: 350, height: 100))
    }
}
