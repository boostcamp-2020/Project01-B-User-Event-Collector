//
//  SectionTitle.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/11/23.
//

import SwiftUI

struct SectionTitle<Dest: View>: View {
    let width: CGFloat
    let destination: Dest
    let title: String
    
    var body: some View {
        NavigationLink(
            destination: destination,
            label: {
                HStack {
                    Text(title)
                        .foregroundColor(.black)
                        .font(.system(size: 16.5))
                        .bold()
                    Spacer()
                    Text("더보기")
                        .foregroundColor(.secondary)
                        .font(.system(size: 12))
                }
                .padding(.horizontal, width * 0.02)
            })
    }
}

struct SectionTitle_Previews: PreviewProvider {
    static var previews: some View {
        SectionTitle(width: 200, destination: Text("Hello"), title: "최근 들은 노래")
    }
}
