//
//  ThumbnailGrid.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/01.
//

import SwiftUI

struct ThumbnailGrid: View {
    var body: some View {
        GeometryReader { geometry in
            ScrollView {
                LazyVGrid(
                    columns: .init(repeating: .init(), count: 2)
                ) {
                    ForEach(0..<10) { _ in
                        NavigationLink(
                            destination: AlbumPlaylistView(title: "요즘 이 곡", subtitle: "VIBE"),
                            label: {
                                ThumbnailItem(title: "요즘 이 곡", subtitle: "VIBE")
                            }
                        )
                        .foregroundColor(.black)
                    }
                }
                .padding(.horizontal, geometry.size.width * .paddingRatio)
                .padding(.bottom, 70)
            }
        }
    }
}

struct ThumbnailGrid_Previews: PreviewProvider {
    static var previews: some View {
        NavigationView {
            ThumbnailGrid()
        }
                
    }
}
