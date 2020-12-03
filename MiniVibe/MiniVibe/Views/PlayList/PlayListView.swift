//
//  PlayListView.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/03.
//

import SwiftUI

struct PlayListView: View {
    enum ActiveSheet {
        case playList
        case track
    }
    
    @State private var activeSheet: ActiveSheet = .playList
    @State private var showSheet = false
    let title: String
    let subtitle: String
    
    var body: some View {
        GeometryReader { geometry in
            let width: CGFloat = geometry.size.width
            
            ScrollView {
                VStack(spacing: 36) {
                    VStack {
                        PlaylistAlbumInfo(title: title, subtitle: subtitle)
                            .padding(.vertical, 10)
                        
                        LazyVGrid(
                            columns: [.init(.fixed(geometry.size.width))],
                            pinnedViews: [.sectionHeaders]
                        ) {
                            Section(header: PlayAndShuffle(width: geometry.size.width)) {
                                ForEach(0..<20) { _ in
                                    TrackRowC(title: "Dynamite",
                                              artist: "방탄소년단"
                                    ) {
                                        activeSheet = .track
                                        showSheet = true
                                    }
                                }
                            }
                            .padding(.horizontal, geometry.size.width * .paddingRatio)
                        }
                    }
                    
                    ArtistSection(width: width,
                                  sectionTitle: "참여 아티스트")
                }
            }
            .padding(.bottom, 70)
            .navigationBarTitleDisplayMode(.inline)
            .navigationBarItems(
                trailing: trailingBarButtons
            )
            .fullScreenCover(isPresented: $showSheet) {
                PlayerMenu(title: title, subtitle: subtitle)
            }
        }
    }
    
    var trailingBarButtons: some View {
        HStack(spacing: 10) {
            Button {
                
            } label: {
                Image(systemName: "heart")
            }
            
            Button {
                
            } label: {
                Image(systemName: "checkmark.circle")
            }
            
            Button {
                activeSheet = .playList
                showSheet = true
            } label: {
                Image(systemName: "ellipsis")
            }
            .padding(.vertical)
        }
        .font(.system(size: 17))
        .foregroundColor(.black)
    }
    
}

struct PlayListView_Previews: PreviewProvider {
    static var previews: some View {
        NavigationView {
            PlayListView(title: "요즘이곡", subtitle: "VIBE")
        }
    }
}
