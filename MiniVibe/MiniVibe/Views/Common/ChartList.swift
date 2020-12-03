//
//  ChartList.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/11/25.
//

import SwiftUI

struct ChartList: View {
    @State private var isMenuOpen = false
    let title: String
    
    var body: some View {
        GeometryReader { geometry in
            ScrollView {
                LazyVGrid(
                    columns: [.init(.fixed(geometry.size.width))],
                    spacing: 20,
                    pinnedViews: [.sectionHeaders]
                ) {
                    Section(header: PlayAndShuffle(width: geometry.size.width)) {
                        let title = "Dynamite"
                        let artist = "방탄소년단"
                        ForEach(0..<50) { index in
                            TrackRowA(isMenuOpen: $isMenuOpen, order: index + 1, title: title, artist: artist)
                        }
                        .fullScreenCover(isPresented: $isMenuOpen) {
                            PlayerMenu(title: title, subtitle: artist)
                        }
                    }
                    .padding(.horizontal, geometry.size.width * .paddingRatio)
                }
                .navigationTitle(title)
                .navigationBarTitleDisplayMode(.inline)
                .navigationBarItems(
                    trailing: Button {
                        
                    } label: {
                        
                        Image(systemName: "checkmark.circle")
                            .font(.system(size: 17))
                            .foregroundColor(.black)
                    }
                )
                .padding(.bottom, 70)
            }
        }
    }
}

struct ChartList_Previews: PreviewProvider {
    static var previews: some View {
        NavigationView {
            ChartList(title: "최근 들은 노래")
        }
    }
}
