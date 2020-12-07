//
//  PlaylistAlbumInfo.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/01.
//

import SwiftUI

struct PlaylistAlbumInfo: View {
    let album: Album
    @Binding var isOpenArticle: Bool
    
    var body: some View {
        VStack(alignment: .leading) {
            essentialAlbumInfo
            optionalAlbuminfo
        }
        .padding(.horizontal, 10)
    }
    
    var essentialAlbumInfo: some View {
        HStack(alignment: .top) {
            Button {
                isOpenArticle = true
            } label: {
                AsyncImage(urlString: album.imageUrl)
                    .aspectRatio(1, contentMode: .fit)
            }
            
            VStack(alignment: .leading) {
                Text(album.title)
                    .font(.system(size: 18, weight: .bold))
                Text(album.artist.name)
                    .font(.system(size: 16))
                    .foregroundColor(.secondary)
                Spacer()
                Button {
                    // TO DO: 앨범 전체 곡 다운로드
                } label: {
                    Image(systemName: "arrow.down.to.line")
                        .foregroundColor(.black)
                        .font(.system(size: 25, weight: .light))
                }
            }
            .padding(.vertical, 4)
            
            Spacer()
        }
        .frame(height: 130)
    }
    
    var optionalAlbuminfo: some View {
        VStack(alignment: .leading) {
            Text(album.releaseDate)
            
            HStack {
                Text(album.description)
                    .lineLimit(1)
                Text("더보기")
            }
            .onTapGesture {
                isOpenArticle = true
            }
            .foregroundColor(.secondary)
        }
        .font(.system(size: 14))
    }
}

struct PlaylistAlbumInfo_Previews: PreviewProvider {
    static var previews: some View {
        PlaylistAlbumInfo(album: .init(id: 1, title: "", description: "", releaseDate: "", artist: .init(id: 1, name: ""), imageUrl: "", tracks: []), isOpenArticle: .constant(false))
    }
}
