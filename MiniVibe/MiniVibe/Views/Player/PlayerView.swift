//
//  PlayerView.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/01.
//

import SwiftUI

struct PlayerView: View {
    @State private var isOpenMenu = false
    
    var body: some View {
        GeometryReader { geometry in
            ScrollView {
                VStack {
                    Player(isOpenMenu: $isOpenMenu)
                        .frame(height: geometry.size.height)
                    
                    Divider()
                    
                    UpNextList()
                        .frame(height: geometry.size.height)
                }
            }
            .fullScreenCover(isPresented: $isOpenMenu, content: PlayerMenu.init)
        }
    }
}

struct PlayerView_Previews: PreviewProvider {
    static var previews: some View {
        PlayerView()
    }
}
