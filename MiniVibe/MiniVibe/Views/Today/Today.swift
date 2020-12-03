//
//  Today.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/11/25.
//

import SwiftUI

struct Today: View {
    init() {
        let appearance = UINavigationBarAppearance()
        appearance.configureWithTransparentBackground()
        appearance.backgroundColor = .systemBackground
        UINavigationBar.appearance().standardAppearance = appearance
    }
    
    @EnvironmentObject var nowPlaying: NowPlaying
    
    var body: some View {
        GeometryReader { geometry in
            let width = geometry.size.width
            
            NavigationView {
                ScrollView {
                    VStack {
                        NavigationLink(
                            destination: nowPlaying.destination?.view,
                            isActive: $nowPlaying.isNavigationActive) { }
                        VStack(spacing: 30) {
                            TodayTitle()
                                .padding(.horizontal, width * .paddingRatio)
                            
                            PreviewSection(width: width)
                                .aspectRatio(1.5, contentMode: .fit)
                            
                            ThumbnailSection(width: width,
                                             destination: MixtapeGrid(title: "나를 위한 믹스테잎"),
                                             title: "나를 위한 믹스테잎")
                            
                            ThumbnailSection(width: width,
                                             destination: ThumbnailList(title: "즐겨듣는 플레이리스트", info: .playlist),
                                             title: "즐겨듣는 플레이리스트")
                            
                            ThumbnailSection(width: width,
                                             destination: ThumbnailList(title: "내 취향 플레이리스트", info: .playlist),
                                             title: "내 취향 플레이리스트")
                            
                            StationSection(width: width, title: "DJ 스테이션")
                            
                            ChartSectionA(width: width, title: "최근 들은 노래")
                            
                            RecommandedPlayListSection(width: width, title: "VIBE 추천 플레이리스트")
                            
                            ThumbnailSection(width: width,
                                             destination: ThumbnailGridView(title: "좋아할 최신 앨범"),
                                             title: "좋아할 최신 앨범")
                            
                            MagazineSection(width: width, title: "매거진")
                        }
                        .padding(.bottom, 70)
                    }
                    .navigationBarHidden(true)
                    .preference(key: Size.self, value: [geometry.frame(in: CoordinateSpace.global)])
                }
            }
        }
    }
}

struct Today_Previews: PreviewProvider {
    static var previews: some View {
        Today()
    }
}
