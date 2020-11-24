//
//  PlayListItem.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/11/24.
//

import SwiftUI

struct PlayListItem: View {
    var body: some View {
        VStack(alignment: .leading) {
            Image("playListThumbnail")
                .resizable()
                .aspectRatio(1, contentMode: .fit)
            
            Text("경쾌한 인디 팝")
                .font(.system(size: 17))
            
            Text("VIBE 국내 인디")
                .font(.system(size: 12))
                .foregroundColor(.secondary)
        }
    }
}

struct PlayListItem_Previews: PreviewProvider {
    static var previews: some View {
        PlayListItem()
    }
}
