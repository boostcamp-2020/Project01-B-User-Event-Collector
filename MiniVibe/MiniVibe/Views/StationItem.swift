//
//  StationItem.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/11/24.
//

import SwiftUI

struct StationItem: View {
    var body: some View {
        ZStack(alignment: .bottomTrailing) {
            Button {

            } label: {
                Image("station")
                    .resizable()
                    .aspectRatio(contentMode: .fit)
            }
            
            Image(systemName: "play.circle.fill")
                .font(.system(size: 20))
                .foregroundColor(Color.white.opacity(0.8))
                .padding(10)
        }
    }
}

struct StationItem_Previews: PreviewProvider {
    static var previews: some View {
        StationItem()
    }
}
