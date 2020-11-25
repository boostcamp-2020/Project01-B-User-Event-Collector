//
//  MagazineList.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/11/25.
//

import SwiftUI

struct MagazineList: View {
    let barTitle: String
    
    var body: some View {
        GeometryReader { geometry in
            ScrollView {
                LazyVGrid(columns: [.init()]) {
                    ForEach(0..<20) {_ in
                        ListRow()
                    }
                }
                .navigationBarTitle(
                    Text(barTitle),
                    displayMode: .inline
                )
                .padding(geometry.size.width * 0.04)
            }
        }
    }
}

struct MagazineList_Previews: PreviewProvider {
    static var previews: some View {
        NavigationView {
            MagazineList(barTitle: "매거진")
        }
    }
}
