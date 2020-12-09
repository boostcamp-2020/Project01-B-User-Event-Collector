//
//  NewsItem.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/07.
//

import SwiftUI
import KingfisherSwiftUI

struct NewsItem: View {
    let width: CGFloat
    let news: News
    
    var body: some View {
        VStack(alignment: .trailing, spacing: width * .spacingRatio) {
            // VStack 선택시 news url로 가게 될텐데, 그럴려면 news 전체를 받아오면 되고
            VStack {
                KFImage(URL(string: news.imageUrl))
                    .aspectRatio(3, contentMode: .fit)
                
                Text(news.title)
                    .font(.system(size: 17))
                    .bold()
            }
            
            NavigationLink(destination: AlbumView(id: news.albumId)) {
                HStack(spacing: width * .spacingRatio) {
                    Image(systemName: "play.circle.fill")
                    Text("음악듣기")
                        .font(.system(size: 13))
                }
                .foregroundColor(.pink)
                .padding()
            }
        }
        .border(Color(.systemGray6), width: 1)
        .frame(width: width * .sectionRatio)
    }
}

struct NewsItem_Previews: PreviewProvider {
    static var previews: some View {
        GeometryReader { geometry in
            NewsItem(width: geometry.size.width,
                     news: News(id: 0, title: "", imageUrl: "", date: "", link: "", albumId: 0))
        }
    }
}
