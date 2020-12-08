//
//  AlbumSection.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/11/24.
//

import SwiftUI

struct AlbumSection<D: View>: View {
    init(width: CGFloat, title: String, albums: [Album], @ViewBuilder destination: @escaping () -> D) {
        self.width = width
        self.title = title
        self.albums = albums
        self.destination = destination
    }
    
    @State private var isOpenMenu = false
    let width: CGFloat
    let title: String
    let albums: [Album]
    let destination: () -> D
    
    var body: some View {
        VStack(spacing: 8) {
            SectionTitle(width: width, title: title, destination: destination)
                         
            ScrollView(.horizontal, showsIndicators: false) {
                HStack(spacing: width * .spacingRatio) {
                    ForEach(albums, id: \.id) { album in
                        NavigationLink(
                            destination: AlbumView(id: album.id),
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
        AlbumSection(width: 375, title: "앨범", albums: []) {
            Text("앨범 목록")
        }
        .previewLayout(.fixed(width: 375, height: 300))
    }
}
