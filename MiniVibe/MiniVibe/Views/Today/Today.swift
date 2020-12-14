//
//  Today.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/11/25.
//

import SwiftUI
import Combine

struct Today: View {
    init() {
        let appearance = UINavigationBarAppearance()
        appearance.configureWithTransparentBackground()
        appearance.backgroundColor = .systemBackground
        UINavigationBar.appearance().standardAppearance = appearance
    }
    
    @StateObject private var viewModel = TodayViewModel()
    
    var body: some View {
        GeometryReader { geometry in
            let width = geometry.size.width
            
            NavigationView {
                ScrollView {
                    VStack {
                        VStack(spacing: 30) {
                            TodayTitle(width: width)
                                .padding(.horizontal, width * .paddingRatio)
                            
                            PreviewSection(width: width)
                                .aspectRatio(1.5, contentMode: .fit)
                            
                            MixtapeSection(width: width,
                                           title: "나를 위한 믹스테잎",
                                           mixtapes: viewModel.state.mixtapes)
                            
                            PlayListSection(width: width,
                                            title: "즐겨듣는 플레이리스트",
                                            playlists: viewModel.state.playlists) {
                                ThumbnailList(info: .playlist(data: viewModel.state.playlists),
                                              navigationTitle: "즐겨듣는 플레이리스트")
                                    .logTransition(identifier: .playlists(id: 0),
                                                   componentId: .sectionTitle(category: "즐겨듣는 플레이리스트"))
                            }
                            
                            PlayListSection(width: width,
                                            title: "내 취향 플레이리스트",
                                            playlists: viewModel.state.playlists) {
                                ThumbnailList(info: .playlist(data: viewModel.state.playlists),
                                              navigationTitle: "내 취향 플레이리스트")
                                    .logTransition(identifier: .playlists(id: 1),
                                                   componentId: .sectionTitle(category: "내 취향 플레이리스트"))
                            }
                            
                            StationSection(width: width, title: "DJ 스테이션")
                            
                            ChartSectionA(width: width, title: "최근 들은 노래", tracks: viewModel.state.tracks)
                            
                            RecommandedPlayListSection(width: width, title: "VIBE 추천 플레이리스트")
                            
                            AlbumSection(width: width,
                                         title: "좋아할 최신 앨범",
                                         albums: viewModel.state.albums) {
                                ThumbnailGridView(title: "좋아할 최신 앨범",
                                                  album: viewModel.state.albums)
                                    .logTransition(identifier: .recommendedRecentAlbum,
                                                   componentId: .sectionTitle(category: "좋아할 최신 앨범"))
                            }
                            
                            MagazineSection(width: width,
                                            magazines: viewModel.state.magazines)
                        }
                        .padding(.bottom, 70)
                    }
                    .navigationBarHidden(true)
                    .preference(key: Size.self, value: [geometry.frame(in: CoordinateSpace.global)])
                }
            }
            .onAppear {
                viewModel.send(.appear)
            }
        }
    }
}

struct Today_Previews: PreviewProvider {
    static var previews: some View {
        Group {
            Today()
                .previewDevice(PreviewDevice(rawValue: "iPhone SE"))
                .previewDisplayName("iPhone SE")
            
            Today()
                .previewDevice(PreviewDevice(rawValue: "iPhone 12 mini"))
                .previewDisplayName("iPhone 12 mini")
        }
    }
}
