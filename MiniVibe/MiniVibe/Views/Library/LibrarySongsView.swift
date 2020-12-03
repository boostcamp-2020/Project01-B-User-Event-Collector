//
//  LibrarySongsView.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/03.
//

import SwiftUI

struct LibrarySongsView: View {
    @State private var isMenuOpen = false
    
    var body: some View {
        GeometryReader { geometry in
            ScrollView {
                LazyVGrid(
                    columns: [.init(.fixed(geometry.size.width))],
                    spacing: 20,
                    pinnedViews: [.sectionHeaders]
                ) {
                    Section(header: PlayAndShuffle(width: geometry.size.width)) {
                        // 정렬 부분은 구현을... 안할 것 같지만 일단 넣어는 놓음
                        HStack {
                            Text("9 songs")
                            Spacer()
                            Button {
                                
                            } label: {
                                HStack(spacing: 2) {
                                    Image(systemName: "arrow.up.arrow.down")
                                    Text("Recently Added")
                                }
                                .foregroundColor(.black)
                            }
                        }
                        ForEach(0..<50) { _ in
                            TrackRowC(isMenuOpen: $isMenuOpen,
                                      title: "너랑 나",
                                      artist: "아이유"
                            )
                        }
                    }
                    .padding(.horizontal, geometry.size.width * .paddingRatio)
                }
                .fullScreenCover(isPresented: $isMenuOpen) {
                    PlayerMenu(title: "Among US", subtitle: "정혜일")
                }
                .padding(.bottom, 70)
            }
        }
    }
}

struct LibrarySongsView_Previews: PreviewProvider {
    static var previews: some View {
        LibrarySongsView()
    }
}
