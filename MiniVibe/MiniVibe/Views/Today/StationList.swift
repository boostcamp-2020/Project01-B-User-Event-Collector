//
//  StationList.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/11/25.
//

import SwiftUI

struct StationList: View {
    let items: [Station] = [.init(imageUrl: "https://music-phinf.pstatic.net/20181204_203/1543918901105PmOS5_PNG/mood_11_Party.png?type=f360"),
                            .init(imageUrl: "https://music-phinf.pstatic.net/20181204_251/1543918889382acDmF_PNG/mood_9_Wokrout.png?type=f360"),
                            .init(imageUrl: "https://music-phinf.pstatic.net/20181204_193/1543918895074bt55B_PNG/mood_10_Relax.png?type=f360"),
                            .init(imageUrl: "https://music-phinf.pstatic.net/20181204_1/1543917558419bLOt5_PNG/mood_2_Hip.png?type=f360")]
    
    let genre: [Station] = [.init(imageUrl: "https://music-phinf.pstatic.net/20190717_280/1563371916540i7TdP_PNG/dj_3_genre_1.png?type=f360"),
                            .init(imageUrl: "https://music-phinf.pstatic.net/20190717_294/1563371930617qgT9H_PNG/dj_3_genre_2.png?type=f360"),
                            .init(imageUrl: "https://music-phinf.pstatic.net/20190717_156/1563372004386TBVUz_PNG/dj_3_genre_8.png?type=f360"),
                            .init(imageUrl: "https://music-phinf.pstatic.net/20190717_144/1563372056614GXUwM_PNG/dj_3_genre_13.png?type=f360")]
    
    var body: some View {
        GeometryReader { geometry in
            ScrollView {
                VStack(alignment: .leading) {
                    Section(
                        header: Text("최근 들은 스테이션")
                            .bold()
                            .foregroundColor(.primary)
                            .padding(.top, 8)
                            .padding(.horizontal, geometry.size.width * .paddingRatio),
                        footer: Spacer().frame(height: 50)
                    ) {
                        StationStack(width: geometry.size.width)
                    }
                    
                    Section(
                        header: Text("느낌별 스테이션")
                            .bold()
                            .foregroundColor(.primary),
                        footer: Spacer().frame(height: 50)
                    ) {
                        LazyVGrid(
                            columns: .init(
                                repeating: .init(.fixed(geometry.size.width * .thumbnailRatio)),
                                count: 2
                            )
                        ) {
                            ForEach(items, id: \.self) { item in
                                StationItem(imageUrl: item.imageUrl)
                            }
                        }
                    }
                    .padding(.horizontal, geometry.size.width * .paddingRatio)
                    
                    Section(
                        header: Text("장르 스테이션")
                            .bold()
                            .foregroundColor(.primary),
                        footer: Spacer().frame(height: 50)
                    ) {
                        LazyVGrid(
                            columns: .init(
                                repeating: .init(.fixed(geometry.size.width * .thumbnailRatio)),
                                count: 2
                            )
                        ) {
                            ForEach(genre, id: \.self) { item in
                                StationItem(imageUrl: item.imageUrl)
                            }
                        }
                    }
                    .padding(.horizontal, geometry.size.width * .paddingRatio)
                    
                }
                .padding(.bottom, 20)
                .navigationTitle("스테이션")
                .navigationBarTitleDisplayMode(.inline)
            }
        }
    }
}

struct StationList_Previews: PreviewProvider {
    static var previews: some View {
        NavigationView {
            StationList()
        }
    }
}
