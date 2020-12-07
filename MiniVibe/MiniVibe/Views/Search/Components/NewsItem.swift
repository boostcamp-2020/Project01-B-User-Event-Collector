//
//  NewsItem.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/07.
//

import SwiftUI

struct NewsItem: View {
    let width: CGFloat
    let title: String
    let imageURL: String
    
    var body: some View {
        VStack(alignment: .trailing, spacing: width * .spacingRatio) {
            VStack {
                AsyncImage(urlString: imageURL)
                    .aspectRatio(3, contentMode: .fit)
                
                Text(title)
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

struct NewsItem_Previews: PreviewProvider {
    static var previews: some View {
        GeometryReader { geometry in
            NewsItem(width: geometry.size.width,
                     title: "",
                     imageURL: "")
        }
    }
}
