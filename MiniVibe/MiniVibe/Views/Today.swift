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
            
            ScrollView {
                VStack(spacing: 30) {
                    TodayTitle()
                        .padding(.horizontal, width * 0.02)
                    ContentSection(width: width)
                        .aspectRatio(1.5, contentMode: .fit)
                    PlayListSection(width: width)
                    
                    PlayListSection(width: width)
                    PlayListSection(width: width)
                    StationSection(width: width)
                    ChartSection(width: width)
                    RecommandedPlayListSection(width: width)
                    PlayListSection(width: width)
                    MagazineSection(width: width)
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
