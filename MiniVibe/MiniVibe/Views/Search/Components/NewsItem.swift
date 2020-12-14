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
            VStack {
                KFImage(URL(string: news.imageUrl))
                    .placeholder {
                        Image("placeholder")
                            .resizable()
                    }
                    .frame(width: width * .sectionRatio, height: 150)
                    
                Text(news.title)
                    .font(.system(size: 17))
                    .foregroundColor(.primary)
                    .bold()
                    .padding()
            }
            
            NavigationLink(destination:
                            AlbumView(viewModel: .init(id: news.albumId, eventLogger: MiniVibeApp.eventLogger))
                            .logTransition(identifier: .album(id: news.albumId),
                                           componentId: .newsItem)
            ) {
                HStack(spacing: width * .spacingRatio) {
                    Image(systemName: "play.circle.fill")
                    Text("음악듣기")
                        .font(.system(size: 13))
                }
                .foregroundColor(.accentColor)
                .padding()
            }
        }
        .border(Color(.systemGray6), width: 1)
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
