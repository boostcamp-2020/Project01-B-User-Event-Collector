//
//  NewsSection.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/04.
//

import SwiftUI

struct NewsItem: View {
    let width: CGFloat
    
    var body: some View {
        VStack(alignment: .trailing, spacing: width * .spacingRatio) {
            VStack{
                Image("content")
                    .resizable()
                    .aspectRatio(3, contentMode: .fit)
                
                Text("태연이 네번째 미니앨범을 발표함니다")
                    .font(.system(size: 17))
                    .bold()
            }
            
            Button {
                
            } label: {
                HStack(spacing: width * .spacingRatio) {
                    Image(systemName: "play.circle.fill")
                    Text("음악듣기")
                        .font(.system(size: 13))
                }
            }
            .foregroundColor(.pink)
            .padding()
        }
        .border(Color(.systemGray6), width: 1)
        .frame(width: width * .sectionRatio)
    }
}

struct NewsSection: View {
    let width: CGFloat
    
    var body: some View {
        ScrollView(.horizontal, showsIndicators: false) {
            HStack {
                ForEach(0..<3) { _ in
                    NewsItem(width: width)
                }
            }
            .padding(.horizontal, width * .paddingRatio)
        }
    }
}

struct NewsSection_Previews: PreviewProvider {
    static var previews: some View {
        GeometryReader { geometry in
            NewsSection(width: geometry.size.width)
                
        }
        .previewLayout(.fixed(width: 375, height: 250))
    }
}
