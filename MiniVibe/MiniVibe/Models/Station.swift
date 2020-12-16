//
//  Station.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/16.
//

import Foundation

struct Station: Hashable {
    let imageUrl: String
}

// swiftlint:disable line_length
enum MockStationItem {
    static let stations = [
        Station(imageUrl: "https://music-phinf.pstatic.net/20181204_203/1543918901105PmOS5_PNG/mood_11_Party.png?type=f360"),
        Station(imageUrl: "https://music-phinf.pstatic.net/20181204_251/1543918889382acDmF_PNG/mood_9_Wokrout.png?type=f360"),
        Station(imageUrl: "https://music-phinf.pstatic.net/20181204_193/1543918895074bt55B_PNG/mood_10_Relax.png?type=f360"),
        Station(imageUrl: "https://music-phinf.pstatic.net/20181204_1/1543917558419bLOt5_PNG/mood_2_Hip.png?type=f360")
    ]
    
    static let genreStations = [Station(imageUrl: "https://music-phinf.pstatic.net/20190717_280/1563371916540i7TdP_PNG/dj_3_genre_1.png?type=f360"),
                                Station(imageUrl: "https://music-phinf.pstatic.net/20190717_294/1563371930617qgT9H_PNG/dj_3_genre_2.png?type=f360"),
                                Station(imageUrl: "https://music-phinf.pstatic.net/20190717_156/1563372004386TBVUz_PNG/dj_3_genre_8.png?type=f360"),
                                Station(imageUrl: "https://music-phinf.pstatic.net/20190717_144/1563372056614GXUwM_PNG/dj_3_genre_13.png?type=f360")]
}
// swiftlint:enable line_length
