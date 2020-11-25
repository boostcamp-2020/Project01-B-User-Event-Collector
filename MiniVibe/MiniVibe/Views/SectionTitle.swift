//
//  SectionTitle.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/11/23.
//

import SwiftUI

struct SectionTitle: View {
    let width: CGFloat
    
    var body: some View {
        HStack {
            Text("최근 들은 노래")
                .font(.system(size: 16.5))
                .bold()
            Spacer()
            Text("더보기")
                .font(.system(size: 12))
                .foregroundColor(.secondary)
        }
        .padding(.horizontal, width * 0.02)
    }
}

//struct SectionTitle_Previews: PreviewProvider {
//    static var previews: some View {
//        SectionTitle()
//    }
//}
