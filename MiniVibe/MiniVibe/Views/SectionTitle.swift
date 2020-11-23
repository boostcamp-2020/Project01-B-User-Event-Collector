//
//  SectionTitle.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/11/23.
//

import SwiftUI

struct SectionTitle: View {
    var body: some View {
        HStack {
            Text("최근 들은 노래")
                .font(.title)
                .bold()
            Spacer()
            Text("더보기")
                .font(.title3)
                .foregroundColor(.secondary)
        }
        .padding()
    }
}

struct SectionTitle_Previews: PreviewProvider {
    static var previews: some View {
        SectionTitle()
    }
}
