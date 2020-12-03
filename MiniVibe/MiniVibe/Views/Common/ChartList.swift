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
                        ForEach(0..<50) { index in
                            TrackRowA(isMenuOpen: $isMenuOpen, order: index + 1, title: "Dynamite", artist: "방탄소년단")
                        }
                    }
                    .padding(.horizontal, geometry.size.width * .paddingRatio)
                }
                .fullScreenCover(isPresented: $isMenuOpen) {
                    PlayerMenu(title: "Among US", subtitle: "정혜일")
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
