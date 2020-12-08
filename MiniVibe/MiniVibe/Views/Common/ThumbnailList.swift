//
//  ThumbnailList.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/11/25.
//

import SwiftUI

struct ThumbnailList: View {
    enum Info {
        case playlist(data: [Playlist])
        case magazine(data: [Magazine])
    }
    
    let info: Info
    let navigationTitle: String
    
    var body: some View {
        GeometryReader { geometry in
            ScrollView {
                LazyVGrid(columns: [.init()], alignment: .leading) {
                    buildList()
                        .foregroundColor(.black)
                }
                .navigationBarTitle(
                    Text(navigationTitle),
                    displayMode: .inline
                )
                .padding(.horizontal, geometry.size.width * .paddingRatio)
                .padding(.bottom, 70)
            }
        }
    }
    
    @ViewBuilder
    func buildList() -> some View {
        switch info {
        case let .playlist(data):
            ForEach(data, id: \.id) { playlist in
                NavigationLink(destination: AlbumView(id: playlist.id)) {
                    ThumbnailRow(imageURL: playlist.imageUrl ?? "",
                                 title: playlist.title,
                                 subtitle: playlist.subTitle ?? "")
                }
            }
        case let .magazine(data):
            ForEach(data, id: \.id) { magazine in
                NavigationLink(destination: MagazineView(magazine: magazine)) {
                    ThumbnailRow(imageURL: magazine.imageUrl,
                                 title: magazine.title,
                                 subtitle: magazine.date)
                }
            } 
        }
    }
    
}

struct ThumbnailList_Previews: PreviewProvider {
    static var previews: some View {
        NavigationView {
            ThumbnailList(info: .magazine(data: []), navigationTitle: "매거진")
        }
    }
}
