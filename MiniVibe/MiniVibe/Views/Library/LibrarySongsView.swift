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
                        HStack {
                            Text("50곡")
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
                            TrackRowC(viewModel: .init(track: trackinfo)) { _ in
                                isMenuOpen = true
                            }
                            .fullScreenCover(isPresented: $isMenuOpen) {
                                PlayerMenu(viewModel: .init(track: trackinfo))
                                    .logTransition(identifier: .playerMenu(id: trackinfo.id),
                                                   componentId: .trackMenuButton
                                    )
                            }
                        }
                    }
                    .padding(.horizontal, geometry.size.width * .paddingRatio)
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
