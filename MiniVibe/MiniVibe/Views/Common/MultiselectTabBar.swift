//
//  MultiselectTabBar.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/01.
//

import SwiftUI

struct MultiselectTabBar: View {
    @EnvironmentObject private var nowPlaying: NowPlayingViewModel
    
    var body: some View {
        ZStack {
            Rectangle()
                .foregroundColor(.accentColor)
            
            HStack {
                TabbarButton(type: .addToPlaylist) {
                    
                }
                
                Spacer()
                
                TabbarButton(type: .save) {
                    
                }
                
                Spacer()
                
                TabbarButton(type: .delete) {
                    nowPlaying.send(.deleteSelectedTracks)
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
