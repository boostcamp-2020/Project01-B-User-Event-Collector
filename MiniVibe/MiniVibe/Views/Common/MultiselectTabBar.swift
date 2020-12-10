//
//  MultiselectTabBar.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/01.
//

import SwiftUI

struct MultiselectTabBar: View {
    @EnvironmentObject private var nowPlaying: NowPlaying
    
    var body: some View {
        ZStack {
            Rectangle()
                .foregroundColor(Color.pink)
            
            HStack {
                TabbarButton(type: .addToPlaylist) {
                    
                }
                
                Spacer()
                
                TabbarButton(type: .save) {
                    
                }
                
                Spacer()
                
                TabbarButton(type: .delete) {
                    nowPlaying.deleteTrack()
                    nowPlaying.selectedTracks.removeAll()
                }
            }
            .foregroundColor(.white)
            .padding(.horizontal, 50)
        }
    }
}

struct MultiselectTabBar_Previews: PreviewProvider {
    static var previews: some View {
        MultiselectTabBar()
    }
}
