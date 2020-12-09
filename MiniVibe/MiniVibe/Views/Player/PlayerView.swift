//
//  PlayerView.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/01.
//

import SwiftUI

struct PlayerView: View {
    @EnvironmentObject var eventLogger: EventLogger
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
                        .logTransition(eventLogger: eventLogger, identifier: .lyrics(id: 100))
                }
            }
            .animation(.easeInOut)
            .fullScreenCover(isPresented: $isOpenMenu) {
                PlayerMenu(track: trackinfo)
            }
            .logTransition(eventLogger: eventLogger, identifier: .player)
        }
    }
}

struct PlayerView_Previews: PreviewProvider {
    static var previews: some View {
        PlayerView(title: "Dynamite", artist: "방탄소년단")
    }
}
