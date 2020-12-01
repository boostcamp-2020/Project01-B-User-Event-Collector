//
//  ArtistView.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/01.
//

import SwiftUI

struct ArtistView: View {
    let title: String
    
    var body: some View {
        GeometryReader { geometry in
            let width = geometry.size.width
            ScrollView {
                VStack(spacing: 24) {
                    ArtistThumbnail()
                    ChartSection(width: width, title: "노래")
                    ThumbnailSection(width: width,
                                     destination: ArtistAlbumGridView(title: "앨범"),
                                     title: "앨범")
                    ThumbnailSection(width: width,
                                     destination: ThumbnailList(title: "관련 플레이리스트"),
                                     title: "관련 플레이리스트")
                    ArtistSection(width: width,
                                  sectionTitle: "비슷한 아티스트")
                }
            }
            .navigationTitle(title)
            .navigationBarItems(trailing: trailingBarButtons)
            .navigationBarTitleDisplayMode(.inline)
        }
    }
    
    var trailingBarButtons: some View {
        HStack(spacing: 10) {
            Button {
                
            } label: {  Image(systemName: "heart") }
            
            Button {
                
            } label: { Image(systemName: "ellipsis")  }
        }
        .font(.system(size: 17))
        .foregroundColor(.black)
    }
}

struct ArtistView_Previews: PreviewProvider {
    static var previews: some View {
        NavigationView {
            ArtistView(title: "방탄소년단")
        }
    }
}
