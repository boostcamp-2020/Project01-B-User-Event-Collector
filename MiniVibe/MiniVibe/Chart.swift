//
//  Chart.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/03.
//

import SwiftUI

struct Chart: View {
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
                        ChartSectionB(width: width, sectionTitle: "오늘 TOP 100")
                        ChartSectionB(width: width, sectionTitle: "국내 급상승 🔥")
                        ChartSectionB(width: width, sectionTitle: "VIBE 노래방 TOP 100 🎤")
                        AlbumSection(width: width, title: "최신 앨범", albums: []) {
                            ArtistAlbumGridView(
                               title: "최신 앨범",
                               categories: ["국내", "해외"]
                            )
                            .logTransition(identifier: .latestAlbumList, componentId: .sectionTitle(category: "최신 앨범"))
                        }
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
    }
}
