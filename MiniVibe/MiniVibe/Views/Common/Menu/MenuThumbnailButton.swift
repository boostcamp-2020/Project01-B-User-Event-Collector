//
//  MenuThumbnailButton.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/02.
//

import SwiftUI

struct MenuThumbnailButton: View {
    init(title: String, subtitle: String? = nil, imageURL: String, action: @escaping () -> Void) {
        self.title = title
        self.subtitle = subtitle
        self.imageURL = imageURL
        self.action = action
    }
    
    private let title: String
    private let subtitle: String?
    private let imageURL: String
    private let action: () -> Void
    
    var body: some View {
        Button(action: action) {
            AsyncImage(urlString: imageURL)
                .aspectRatio(1, contentMode: .fit)
                .frame(width: 80)
            VStack(alignment: .leading,
                   spacing: 4) {
                Text(title)
                    .font(.system(size: 18, weight: .bold))
                Text(subtitle ?? "")
                    .foregroundColor(.secondary)
                    .opacity(subtitle == nil ? 0 : 1)
            }
            .lineLimit(1)
            .padding(.horizontal, 8)
            Spacer()
            Image(systemName: "chevron.right")
                .foregroundColor(.secondary)
        }
        .foregroundColor(.black)
        .padding(.horizontal)
    }
}

struct MenuThumbnailButton_Previews: PreviewProvider {
    static var previews: some View {
        MenuThumbnailButton(title: "Dynamite", subtitle: "방탄소년단", imageURL: "", action: { })
    }
}
