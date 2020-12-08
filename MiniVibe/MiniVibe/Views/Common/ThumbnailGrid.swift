//
//  ThumbnailGrid.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/01.
//

import SwiftUI

struct ThumbnailGrid: View {
    let albums: [Album]
    
    var body: some View {
        GeometryReader { geometry in
            ScrollView {
                LazyVGrid(
                    columns: .init(repeating: .init(), count: 2)
                ) {
                    ForEach(albums, id: \.id) { album in
                        NavigationLink(
                            destination: AlbumView(id: album.id),
                            label: {
                                ThumbnailItem(title: album.title,
                                              subtitle: album.artist.name,
                                              imageURL: album.imageUrl)
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
            ThumbnailGrid(albums: [])
        }
                
    }
}
