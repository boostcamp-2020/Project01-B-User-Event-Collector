//
//  MenuThumbnailButton.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/02.
//

import SwiftUI
import KingfisherSwiftUI

struct MenuThumbnailButton: View {
    let imageUrl: String
    let title: String
    let subtitle: String
    
    var body: some View {
        HStack {
            MenuAlbumImage(imageUrl: imageUrl)

            VStack(alignment: .leading, spacing: 4) {
                Text(title)
                    .font(.system(size: 18, weight: .bold))
                    .foregroundColor(.primary)

                Text(subtitle)
                    .foregroundColor(.secondary)
            }
            .lineLimit(1)
            .padding(.horizontal, 8)
            
            Spacer()
        }
        .padding(.horizontal)
    }
}

struct MenuThumbnailButton_Previews: PreviewProvider {
    static var previews: some View {
        MenuThumbnailButton(imageUrl: "", title: "bbb", subtitle: "ccc")
            .previewLayout(.fixed(width: 375, height: 80))
            .previewInAllColorSchemes
    }
}
