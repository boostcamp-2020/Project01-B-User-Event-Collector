//
//  ThumbnailList.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/11/25.
//

import SwiftUI

struct ThumbnailList: View {
    let title: String
    
    var body: some View {
        GeometryReader { geometry in
            ScrollView {
                LazyVGrid(columns: [.init()]) {
                    ForEach(0..<20) {_ in
                        ThumbnailRow()
                    }
                }
                .navigationBarTitle(
                    Text(title),
                    displayMode: .inline
                )
                .padding(geometry.size.width * .paddingRatio)
            }
        }
    }
}

struct ThumbnailList_Previews: PreviewProvider {
    static var previews: some View {
        NavigationView {
            ThumbnailList(title: "매거진")
        }
    }
}
