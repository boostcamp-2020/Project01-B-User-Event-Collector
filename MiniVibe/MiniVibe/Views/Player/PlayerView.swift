//
//  PlayerView.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/01.
//

import SwiftUI

struct PlayerView: View {
    @EnvironmentObject var nowPlaying: NowPlaying
    @State private var isOpenMenu = false
    @State private var isOpenLyrics = false
    let title: String
    let artist: String
    
    var body: some View {
        GeometryReader { geometry in
            ZStack {
                ScrollView {
                    VStack {
                        Player(isOpenMenu: $isOpenMenu,
                               isOpenLyrics: $isOpenLyrics,
                               title: title,
                               artist: artist)
                            .frame(height: geometry.size.height)
                        
                        Divider()
                        
                        UpNextList()
                            .frame(height: geometry.size.height)
                    }
                }
                if isOpenLyrics {
                    Lyrics(isOpenLyrics: $isOpenLyrics)
                }
            }
            .animation(.easeInOut)
            .fullScreenCover(isPresented: $isOpenMenu) {
                PlayerMenu(title: title, subtitle: artist)
                    .environmentObject(nowPlaying)
            }
        }
    }
}

struct PlayerView_Previews: PreviewProvider {
    static var previews: some View {
        PlayerView(title: "Dynamite", artist: "방탄소년단")
    }
}
