//
//  ThumbnailList.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/11/25.
//

import SwiftUI

struct ThumbnailList: View {
    enum Info {
        case playlist
        case magazine
    }
    
    let title: String
    let info: Info
    
    var body: some View {
        GeometryReader { geometry in
            ScrollView {
                LazyVGrid(columns: [.init()]) {
                    ForEach(0..<20) {_ in
                        NavigationLink(destination: destination()) {
                            ThumbnailRow()
                        }
                    }
                    .foregroundColor(.black)
                }
                .navigationBarTitle(
                    Text(title),
                    displayMode: .inline
                )
                .padding(.horizontal, geometry.size.width * .paddingRatio)
                .padding(.bottom, 70)
            }
        }
    }
    
    @ViewBuilder
    func destination() -> some View {
        switch info {
        case .playlist:
            AlbumView(viewModel: AlbumViewModel(id: 11))
        case .magazine:
            Text("Magazine content")
        }
    }
}

struct ThumbnailList_Previews: PreviewProvider {
    static var previews: some View {
        NavigationView {
            ThumbnailList(title: "매거진", info: .playlist)
        }
    }
}
