//
//  MagazineList.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/11/25.
//

import SwiftUI

struct MagazineList: View {
    var body: some View {
        GeometryReader { geometry in
            ScrollView {
                LazyVGrid(columns: [.init()]) {
                    ForEach(0..<20) {_ in
                        ListRow()
                    }
                }
                .navigationBarTitle(
                    Text("VIBE 추천 플레이리스트"),
                    displayMode: .inline
                )
                .padding(geometry.size.width * 0.02)
            }
        }
    }
}

struct MagazineList_Previews: PreviewProvider {
    static var previews: some View {
        NavigationView {
            MagazineList()
        }
    }
}
