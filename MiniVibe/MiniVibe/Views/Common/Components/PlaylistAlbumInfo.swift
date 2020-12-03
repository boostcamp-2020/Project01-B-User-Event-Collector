//
//  PlaylistAlbumInfo.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/01.
//

import SwiftUI

struct PlaylistAlbumInfo: View {
    let title: String
    let subtitle: String
    @Binding var isOpenArticle: Bool
    
    var body: some View {
        VStack {
            EssentialAlbumInfo(title: title,
                               subtitle: subtitle,
                               isOpenArticle: $isOpenArticle)
            OptionalAlbumInfo(isOpenArticle: $isOpenArticle)
                .padding(.horizontal, 10)
        }
    }
}

struct EssentialAlbumInfo: View {
    let title: String
    let subtitle: String
    @Binding var isOpenArticle: Bool
    
    var body: some View {
        HStack(alignment: .top) {
            Button {
                isOpenArticle = true
            } label: {
                Image("album")
                    .resizable()
                    .aspectRatio(1, contentMode: .fit)
            }
            
            VStack(alignment: .leading) {
                Text("\(title)")
                    .font(.system(size: 18, weight: .bold))
                Text("\(subtitle)")
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
}

struct OptionalAlbumInfo: View {
    @Binding var isOpenArticle: Bool
    
    var body: some View {
        VStack(alignment: .leading) {
            Text("2020.8.21 • 댄스 • 6곡")
            
            HStack {
                Text(ArticleExample.content)
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
        PlaylistAlbumInfo(title: "여긴 앨범이고", subtitle: "여긴 가수", isOpenArticle: .constant(false))
    }
}
