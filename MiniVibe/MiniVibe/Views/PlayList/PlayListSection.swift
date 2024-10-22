//
//  PlayListSection.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/03.
//

import SwiftUI

struct PlayListSection<D: View>: View {
    init(width: CGFloat,
         sizeRatio: CGFloat,
         title: String,
         playlists: [Playlist],
         @ViewBuilder destination: @escaping () -> D) {
        self.width = width
        self.sizeRatio = sizeRatio
        self.title = title
        self.playlists = playlists
        self.destination = destination
    }
    
    @State private var isOpenMenu = false
    let width: CGFloat
    let sizeRatio: CGFloat
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
                                PlayListView(viewModel: .init(id: playlist.id, eventLogger: MiniVibeApp.eventLogger))
                                .logTransition(identifier: .playlist(id: playlist.id),
                                               componentId: .playlistItem(section: title))
                            ,
                            label: {
                                ThumbnailItem(title: playlist.title,
                                              subtitle: playlist.subTitle ?? "",
                                              imageURL: playlist.imageUrl)
                                    .frame(width: width * sizeRatio)
                            }
                        )
                    }
                    .foregroundColor(.primary)
                }
                .padding(.horizontal, width * .paddingRatio)
            }
        }
    }
}

struct PlayListSection_Previews: PreviewProvider {
    static var previews: some View {
        PlayListSection(width: 375, sizeRatio: .sectionRatio, title: "플레이리스트", playlists: []) {
            Text("플레이리스트 더보기")
        }
        .previewLayout(.fixed(width: 375, height: 300))
    }
}
