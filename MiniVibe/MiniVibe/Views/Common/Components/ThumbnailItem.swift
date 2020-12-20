//
//  ThumbnailItem.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/11/24.
//

import SwiftUI
import KingfisherSwiftUI

struct ThumbnailItem: View {
    let title: String
    let subtitle: String
    let imageURL: String
    
    var body: some View {
        VStack(alignment: .leading) {
            KFImage(URL(string: imageURL))
                .placeholder {
                    Image("placeholder")
                        .resizable()
                }
                .resizable()
                .aspectRatio(1, contentMode: .fit)
            
            Text(title)
                .font(.system(size: 17))
                .foregroundColor(.primary)
            
            Text(subtitle)
                .font(.system(size: 12))
                .foregroundColor(.secondary)
        }
        .lineLimit(1)
    }
}

struct ThumbnailItem_Previews: PreviewProvider {
    static var previews: some View {
        ThumbnailItem(title: "요즘 이 곡", subtitle: "VIBE", imageURL: "")
            .previewLayout(.fixed(width: 375, height: 415))
    }
}
