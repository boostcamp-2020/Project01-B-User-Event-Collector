//
//  PlayerView.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/01.
//

import SwiftUI

struct PlayerView: View {
    @State private var isOpenMenu = false
    @State private var isOpenLyrics = false
    
    var body: some View {
        GeometryReader { geometry in
            ZStack {
                ScrollView {
                    VStack {
                        Player(isOpenMenu: $isOpenMenu, isOpenLyrics: $isOpenLyrics)
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
            .fullScreenCover(isPresented: $isOpenMenu, content: PlayerMenu.init)
        }
    }
}

struct PlayerView_Previews: PreviewProvider {
    static var previews: some View {
        PlayerView()
    }
}
