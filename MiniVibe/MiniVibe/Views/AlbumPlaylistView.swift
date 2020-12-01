//
//  AlbumPlaylistView.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/01.
//

import SwiftUI

struct AlbumPlaylistView: View {
    let title: String // [Album] : 앨범 명, [Playlist] : 플레이리스트 명
    let subtitle: String // [Album] : 가수 명, [Playlist] : 플레이리스트 명
    
    var body: some View {
        GeometryReader { geometry in
            ScrollView {
                PlaylistAlbumInfo(title: title, subtitle: subtitle)
                    .padding(.vertical, 10)
                
                LazyVGrid(
                    columns: [.init(.fixed(geometry.size.width))],
                    pinnedViews: [.sectionHeaders]
                ) {
                    Section(header: PlayAndShuffle(width: geometry.size.width)) {
                        ForEach(0..<100) { _ in
                            TrackRow()
                        }
                    }
                    .padding(.horizontal, geometry.size.width * .paddingRatio)
                }
                .navigationTitle("\(title)")
                .navigationBarTitleDisplayMode(.inline)
                .navigationBarItems(
                    trailing: trailingBarButtons
                )
            }
        }
    }
    
    @ViewBuilder
    var trailingBarButtons: some View {
        HStack(spacing: 10) {
            Button {
                
            } label: {  Image(systemName: "heart") }
            
            Button {
                
            } label: {  Image(systemName: "checkmark.circle") }
            
            Button {
                
            } label: { Image(systemName: "ellipsis")  }
        }
        .font(.system(size: 17))
        .foregroundColor(.black)
    }
    
}

struct AlbumPlaylistView_Previews: PreviewProvider {
    static var previews: some View {
        NavigationView {
            AlbumPlaylistView(title: "여긴 앨범 이름이야", subtitle: "여긴 가수고")
        }
    }
}
