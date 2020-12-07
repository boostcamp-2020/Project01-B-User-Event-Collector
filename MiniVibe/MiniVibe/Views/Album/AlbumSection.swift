//
//  AlbumSection.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/11/24.
//

import SwiftUI

struct AlbumSection<D: View>: View {
    @State private var isOpenMenu = false
    let width: CGFloat
    let destination: D
    let title: String
    let albums: [Album]
    
    var body: some View {
        VStack(spacing: 8) {
            SectionTitle(width: width,
                         destination: destination,
                         title: title)
            
            ScrollView(.horizontal, showsIndicators: false) {
                HStack(spacing: width * .spacingRatio) {
                    ForEach(albums, id: \.id) { album in
                        NavigationLink(
                            destination: AlbumView(viewModel: AlbumViewModel(id: album.id)),
                            label: {
                                ThumbnailItem(title: album.title,
                                              subtitle: album.artist.name,
                                              imageURL: album.imageUrl)
                                    .frame(width: width * .thumbnailRatio)
                            }
                        )
                    }
                    .foregroundColor(.black)
                }
                .padding(.horizontal, width * .paddingRatio)
            }
        }
    }
}

struct AlbumSection_Previews: PreviewProvider {
    static var previews: some View {
        AlbumSection(width: 375, destination: Text("앨범 목록"), title: "앨범", albums: [])
            .previewLayout(.fixed(width: 375, height: 300))
    }
}
