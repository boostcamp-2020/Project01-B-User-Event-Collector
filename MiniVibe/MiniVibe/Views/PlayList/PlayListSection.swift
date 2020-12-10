//
//  PlayListSection.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/03.
//

import SwiftUI

struct PlayListSection<D: View>: View {
    init(width: CGFloat, title: String, playlists: [Playlist], @ViewBuilder destination: @escaping () -> D) {
        self.width = width
        self.title = title
        self.playlists = playlists
        self.destination = destination
    }
    
    @EnvironmentObject private var eventLogger: EventLogger
    @State private var isOpenMenu = false
    let width: CGFloat
    let title: String
    let playlists: [Playlist]
    let destination: () -> D
    
    var body: some View {
        VStack(spacing: 8) {
            SectionTitle(width: width, title: title, destination: destination)
            
            
            ScrollView(.horizontal, showsIndicators: false) {
                HStack(spacing: width * .spacingRatio) {
                    ForEach(playlists, id: \.id) { playlist in
                        NavigationLink(
                            destination:
                                PlayListView(id: playlist.id)
                                .logTransition(eventLogger: eventLogger,
                                               identifier: .playlist(id: playlist.id))
                            ,
                            label: {
                                ThumbnailItem(title: playlist.title,
                                              subtitle: playlist.subTitle ?? "",
                                              imageURL: playlist.imageUrl)
                                    .frame(width: width * .thumbnailRatio)
                            }
                        )
                    }
                    .foregroundColor(.black)
                }
                .padding(.horizontal, width * .paddingRatio)
            }
        }
    }
}

struct PlayListSection_Previews: PreviewProvider {
    static var previews: some View {
        PlayListSection(width: 375, title: "플레이리스트", playlists: []) {
            Text("플레이리스트 더보기")
        }
        .previewLayout(.fixed(width: 375, height: 300))
    }
}
