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
            KFImage(URL(string: imageUrl))
                .resizable()
                .aspectRatio(1, contentMode: .fit)
                .frame(width: 80)

            VStack(alignment: .leading, spacing: 4) {
                Text(title)
                    .font(.system(size: 18, weight: .bold))

                Text(subtitle)
                    .foregroundColor(.secondary)
            }
            .lineLimit(1)
            .padding(.horizontal, 8)

            Spacer()
        }
        .foregroundColor(.black)
        .padding(.horizontal)
    }
    
}

struct MenuThumbnailButton_Previews: PreviewProvider {
    static var previews: some View {
        MenuThumbnailButton(imageUrl: "", title: "", subtitle: "")
    }
}
