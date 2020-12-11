//
//  LibrarySongsView.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/03.
//

import SwiftUI

struct LibrarySongsView: View {
    @EnvironmentObject private var eventLogger: EventLogger
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
                            let title = "너랑 나"
                            let artist = "아이유"
                            TrackRowC(track: trackinfo) {
                                isMenuOpen = true
                            }
                            .fullScreenCover(isPresented: $isMenuOpen) {
                                PlayerMenu(track: trackinfo)
                                    .logTransition(eventLogger: eventLogger,
                                                   identifier: .playerMenu(id: trackinfo.id),
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
