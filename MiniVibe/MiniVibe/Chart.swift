//
//  Chart.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/03.
//

import SwiftUI

struct Chart: View {
    @StateObject private var viewModel = ChartsViewModel()
    
    var body: some View {
        GeometryReader { geometry in
            let width = geometry.size.width
            NavigationView {
                ScrollView {
                    VStack(alignment: .leading, spacing: 20) {
                        Text("차트")
                            .font(.title)
                            .fontWeight(.heavy)
                            .foregroundColor(.primary)
                            .padding(width * .paddingRatio)
                        ChartSectionB(width: width,
                                      title: "VIBE 노래방 TOP 100 🎤",
                                      tracks: viewModel.state.tracks)
                        
                        AlbumSection(width: width,
                                     title: "최신 앨범",
                                     albums: viewModel.state.albums) {
                            ArtistAlbumGridView(
                                // 여기에 앨범 어떻게 넣을지 생각
                               title: "최신 앨범",
                               categories: ["국내", "해외"])
                            .logTransition(identifier: .latestAlbumList, componentId: .sectionTitle(category: "최신 앨범"))
                        }
                    }
                    .padding(.bottom, 70)
                }
                .navigationBarHidden(true)
            }
        }
        .onAppear {
            viewModel.send(.appear)
        }
    }
}

struct Chart_Previews: PreviewProvider {
    static var previews: some View {
        Chart()
    }
}
