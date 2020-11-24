//
//  MagazineItem.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/11/24.
//

import SwiftUI

struct Badge: View {
    var body: some View {
        Button {
            
            
        } label: {
            Text("Genre".uppercased())
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
}

struct MagazineItem: View {
    var body: some View {
        ZStack(alignment: .bottomLeading) {
            Image("magazine")
                .resizable()
                .aspectRatio(1, contentMode: .fit)
            VStack(alignment: .leading) {
                Badge()
                
                Text("""
                    New Release #17:
                    마일리 사이러스, 방탄소년단
                    """
                )
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
        MagazineItem()
    }
}
