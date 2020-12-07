//
//  MagazineItem.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/11/24.
//

import SwiftUI

private struct Badge: View {
    let title: String
    
    var body: some View {
        Text(title.uppercased())
            .font(.custom("American Typewriter", size: 18))
            .fontWeight(.heavy)
            .foregroundColor(.white)
            .padding(EdgeInsets(top: 5, leading: 10, bottom: 5, trailing: 10))
            .background(
                RoundedRectangle(cornerRadius: /*@START_MENU_TOKEN@*/25.0/*@END_MENU_TOKEN@*/)
                    .foregroundColor(.purple)
            )
    }
}

struct MagazineItem: View {
    let magazine: Magazine
    
    var body: some View {
        ZStack(alignment: .bottomLeading) {
            AsyncImage(urlString: magazine.imageUrl)
                .aspectRatio(1, contentMode: .fit)
            
            VStack(alignment: .leading) {
                Badge(title: magazine.category)
                
                Text(magazine.title)
                    .foregroundColor(.white)
                    .font(.system(size: 24))
                    .fontWeight(.semibold)
            }
            .padding()
        }
    }
}

struct Magazine_Previews: PreviewProvider {
    static var previews: some View {
        MagazineItem(magazine: .init(id: 0, title: "매거진", imageUrl: "abc", category: "뱃지"))
            .previewLayout(.fixed(width: 375, height: 375))
    }
}
