//
//  Today.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/11/25.
//

import SwiftUI

struct Today: View {
    var body: some View {
        GeometryReader { geometry in
            let width = geometry.size.width
            
            NavigationView {
                ScrollView {
                    VStack(spacing: 30) {
                        TodayTitle()
                            .padding(.horizontal, width * 0.04)
                        ContentSection(width: width)
                            .aspectRatio(1.5, contentMode: .fit)
                        PlayListSection(width: width, destination: MixtapeList(), title: "나를 위한 믹스테잎")
                        PlayListSection(width: width, destination: MagazineList(barTitle: "즐겨듣는 플레이리스트"), title: "즐겨듣는 플레이리스트")
                        PlayListSection(width: width, destination: MagazineList(barTitle: "내 취향 플레이리스트"), title: "내 취향 플레이리스트")
                        StationSection(width: width, title: "DJ 스테이션")
                        ChartSection(width: width, title: "최근 들은 노래")
                        RecommandedPlayListSection(width: width, title: "VIBE 추천 플레이리스트")
                        PlayListSection(width: width, destination: MixtapeList(), title: "좋아할 최신 앨범")
                        MagazineSection(width: width, title: "매거진")
                    }
                }
                .navigationBarHidden(true)
            }
        }
    }
}

struct Today_Previews: PreviewProvider {
    static var previews: some View {
        Today()
    }
}
