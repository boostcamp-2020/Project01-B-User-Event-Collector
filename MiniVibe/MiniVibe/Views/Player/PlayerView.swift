//
//  PlayerView.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/01.
//

import SwiftUI

struct PlayerView: View {
    var body: some View {
        GeometryReader { geometry in
            ScrollView {
                VStack {
                    Player()
                        .frame(height: geometry.size.height)
                    
                    Divider()
                    
                    UpNextList()
                        .frame(height: geometry.size.height)
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
