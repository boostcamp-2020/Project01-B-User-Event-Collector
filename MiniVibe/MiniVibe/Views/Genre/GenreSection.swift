//
//  GenreSection.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/04.
//

import SwiftUI

struct GenreItem: View {
    let title: String
    let width: CGFloat
    
    var body: some View {
        Button {

        } label: {
            HStack(spacing: 10) {
                RoundedRectangle(cornerRadius: 25.0)
                    .frame(width: 5, height: 40)
                    .foregroundColor(Color(.brown))
                Text(title)
            }
        }
        .foregroundColor(.black)
        .frame(width: width * .thumbnailRatio - 5, alignment: .leading)
        .padding(.leading, 5)
        .padding(.vertical, 5)
        .background(Color(.systemGray6))
        .cornerRadius(/*@START_MENU_TOKEN@*/3.0/*@END_MENU_TOKEN@*/)
    }
}

struct GenreSection: View {
    var body: some View {
        GeometryReader { geometry in
            VStack(alignment: .leading){
                Text("Genre")
                    .foregroundColor(.black)
                    .font(.system(size: 16.5))
                    .bold()
                    
                LazyVGrid(
                    columns: .init(repeating: .init(), count: 2)
                ) {
                    ForEach(0..<4) { _ in
                        GenreItem(title: "이 노래 들어봐", width: geometry.size.width)
                    }
                }
                .padding(.bottom, 70)
            }
            .padding(.horizontal, geometry.size.width * .paddingRatio)
        }
    }
}

struct GenreSection_Previews: PreviewProvider {
    static var previews: some View {
        //GenreItem(title: "국내 발라드")
        GenreSection()
    }
}

