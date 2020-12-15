//
//  PlaylistAlbumInfo.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/01.
//

import SwiftUI
import KingfisherSwiftUI

struct PlaylistAlbumInfo: View {
    @Binding var isOpenArticle: Bool
    let imageURL: String
    let title: String
    let subtitle: String
    let description: String
    let article: String
    
    var body: some View {
        VStack(alignment: .leading) {
            essentialInfo
            optionalInfo
        }
        .padding(.horizontal, 10)
    }
    
    var essentialInfo: some View {
        HStack(alignment: .top) {
            Button {
                isOpenArticle = true
            } label: {
                KFImage(URL(string: imageURL))
                    .placeholder {
                        Image("placeholder")
                            .resizable()
                    }
                    .resizable()
                    .aspectRatio(1, contentMode: .fit)
            }
            
            VStack(alignment: .leading) {
                Text(title)
                    .font(.system(size: 18, weight: .bold))
                    .foregroundColor(.primary)
                Text(subtitle)
                    .font(.system(size: 16))
                    .foregroundColor(.secondary)
                Spacer()
                Button {
                    // TO DO: 앨범 전체 곡 다운로드
                } label: {
                    Image(systemName: "arrow.down.to.line")
                        .foregroundColor(.primary)
                        .font(.system(size: 25, weight: .light))
                }
            }
            .padding(.vertical, 4)
            
            Spacer()
        }
        .frame(height: 130)
    }
    
    var optionalInfo: some View {
        VStack(alignment: .leading) {
            Text(description)
                .foregroundColor(.primary)
            
            HStack {
                Text(article)
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
        PlaylistAlbumInfo(isOpenArticle: .constant(false),
                          imageURL: "",
                          title: "title",
                          subtitle: "subtitle",
                          description: "asdfasdfasdfasdf",
                          article: "asdfasdfasdfasdf")
            .previewLayout(.fixed(width: 375, height: 200))
            .previewInAllColorSchemes
    }
}
