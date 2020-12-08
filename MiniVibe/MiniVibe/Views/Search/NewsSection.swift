//
//  NewsSection.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/04.
//

import SwiftUI

struct NewsSection: View {
    let width: CGFloat
    let newsList: [News]
    
    var body: some View {
        ScrollView(.horizontal, showsIndicators: false) {
            HStack {
                ForEach(newsList, id: \.id) { news in
                    NewsItem(width: width, news: news)
                }
            }
            .padding(.horizontal, width * .paddingRatio)
        }
    }
}

struct NewsSection_Previews: PreviewProvider {
    static var previews: some View {
        GeometryReader { geometry in
            NewsSection(width: geometry.size.width,
                        newsList: [])
                
        }
        .previewLayout(.fixed(width: 375, height: 250))
    }
}
