//
//  ThumbnailItem.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/11/24.
//

import SwiftUI

struct ThumbnailItem: View {
    let title: String
    let subtitle: String
    
    var body: some View {
        VStack(alignment: .leading) {
            Image("playListThumbnail")
                .resizable()
                .aspectRatio(1, contentMode: .fit)
            
            Text(title)
                .font(.system(size: 17))
            
            Text(subtitle)
                .font(.system(size: 12))
                .foregroundColor(.secondary)
        }
    }
}

struct ThumbnailItem_Previews: PreviewProvider {
    static var previews: some View {
        ThumbnailItem(title: "요즘 이 곡", subtitle: "VIBE")
            .previewLayout(.fixed(width: 375, height: 415))
    }
}
