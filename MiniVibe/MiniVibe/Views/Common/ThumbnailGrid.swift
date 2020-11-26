//
//  ThumbnailGrid.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/11/25.
//

import SwiftUI

struct ThumbnailGrid: View {
    let title: String
    
    var body: some View {
        GeometryReader { proxy in
            ScrollView {
                LazyVGrid(
                    columns: .init(repeating: .init(), count: 2)
                ) {
                    ForEach(0..<10) { _ in
                        ThumbnailItem()
                    }
                }
                .padding(.horizontal, proxy.size.width * .paddingRatio)
                .padding(.vertical)
            }
            .navigationTitle(title)
            .navigationBarTitleDisplayMode(.inline)
        }
    }
}

struct ThumbnailGrid_Previews: PreviewProvider {
    static var previews: some View {
        NavigationView {
            ThumbnailGrid(title: "좋아할 최신 앨범")
        }
    }
}
