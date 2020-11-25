//
//  RecommandedPlayListItem.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/11/24.
//

import SwiftUI

struct RecommandedPlayListItem: View {
    var body: some View {
        VStack(alignment: .leading, spacing: 4) {
            Image("recommandedPlayListThumbnail")
                .resizable()
                .aspectRatio(1, contentMode: .fit)
            
            Text("Work/Study Lo-fi")
                .font(.system(size: 17))
            
            Text("VIBE")
                .font(.system(size: 12))
                .foregroundColor(.secondary)
            
            Text("집중력이 필요한 시간에 듣기 좋은 차분한 멜로디와 간질간질한 질감의 로파이 비트.")
                .font(.system(size: 12))
                .foregroundColor(.secondary)
        }
    }
}

struct RecommandedPlayListItem_Previews: PreviewProvider {
    static var previews: some View {
        RecommandedPlayListItem()
    }
}
