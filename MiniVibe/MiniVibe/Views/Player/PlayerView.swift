//
//  PlayerView.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/01.
//

import SwiftUI

struct PlayerView: View {
    @EnvironmentObject var nowPlaying: NowPlayingViewModel
    @State private var isOpenMenu = false
    @State private var isOpenLyrics = false
    
    var body: some View {
        GeometryReader { geometry in
            ZStack {
                ScrollView {
                    VStack {
                        Player(isMenuOpen: $isOpenMenu, isLyricsOpen: $isOpenLyrics)
                            .frame(height: geometry.size.height)
                        
                        Divider()
                        
                        UpNextList()
                            .frame(height: geometry.size.height)
                    }
                }
                if isOpenLyrics {
                    Lyrics(isOpenLyrics: $isOpenLyrics)
                        .logTransition(identifier: .lyrics(id: 100),
                                       componentId: ComponentId.lyrics)
                }
            }
            .animation(.easeInOut)
            .fullScreenCover(isPresented: $isOpenMenu) {
                if let viewModel = nowPlaying.playingTrack {
                    PlayerMenu(viewModel: viewModel)
                }
            }
        }
    }
}

struct PlayerView_Previews: PreviewProvider {
    static var previews: some View {
        PlayerView()
    }
}
