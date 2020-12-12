//
//  SectionTitle.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/11/23.
//

import SwiftUI

struct SectionTitle<D: View>: View {
    init(width: CGFloat, title: String, @ViewBuilder destination: @escaping () -> D) {
        self.width = width
        self.title = title
        self.destination = destination
    }
    
    let width: CGFloat
    let title: String
    let destination: () -> D
    
    var body: some View {
        NavigationLink(
            destination: destination(),
            label: {
                HStack {
                    Text(title)
                        .foregroundColor(.primary)
                        .font(.system(size: 16.5))
                        .bold()
                    
                    Spacer()
                    
                    Text("더보기")
                        .foregroundColor(.secondary)
                        .font(.system(size: 12))
                }
                .padding(.horizontal, width * .paddingRatio)
            }
        )
    }
}

struct SectionTitle_Previews: PreviewProvider {
    static var previews: some View {
        SectionTitle(width: 375, title: "최근 들은 노래") {
            Text("Hello")
        }
        .previewInAllColorSchemes
        .previewLayout(.fixed(width: 375, height: 50))
    }
}
