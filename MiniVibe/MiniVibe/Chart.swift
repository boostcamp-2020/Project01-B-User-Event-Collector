//
//  Chart.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/03.
//

import SwiftUI

struct Chart: View {
    @EnvironmentObject private var nowPlaying: NowPlaying
    
    var body: some View {
        GeometryReader { geometry in
            let width = geometry.size.width
            NavigationView {
                ScrollView {
                    VStack(alignment: .leading, spacing: 20) {
                        NavigationLink(
                            destination: nowPlaying.destination?.view,
                            isActive: $nowPlaying.isNavigationActive) { }
                        Text("차트")
                            .foregroundColor(.black)
                            .font(.title)
                            .fontWeight(.heavy)
                            .padding(width * .paddingRatio)
                        ChartSectionB(width: width, sectionTitle: "오늘 TOP 100")
                        ChartSectionB(width: width, sectionTitle: "국내 급상승 🔥")
                        ChartSectionB(width: width, sectionTitle: "VIBE 노래방 TOP 100 🎤")
                        ThumbnailSection(width: width,
                                         destination: ArtistAlbumGridView(
                                            title: "최신 앨범",
                                            categories: ["국내", "해외"]
                                         ),
                                         title: "최신 앨범")
                    }
                    .padding(.bottom, 70)
                }
                .navigationBarHidden(true)
            }
        }
    }
}

struct Chart_Previews: PreviewProvider {
    static var previews: some View {
        Chart()
            .environmentObject(NowPlaying())
    }
}
