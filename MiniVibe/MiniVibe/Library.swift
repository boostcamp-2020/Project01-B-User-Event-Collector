//
//  Library.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/03.
//

import SwiftUI

struct Library: View {
    
    @StateObject private var viewModel = LibraryViewModel()
    
    var body: some View {
        GeometryReader { geometry in
            NavigationView {
                ScrollView {
                    VStack(alignment: .leading) {
                        Text("보관함")
                            .font(.title)
                            .fontWeight(.heavy)
                            .foregroundColor(.primary)
                            .padding(geometry.size.width * .paddingRatio)
                        
                        LazyVGrid(
                            columns: [.init(.fixed(geometry.size.width))],
                            spacing: 5,
                            pinnedViews: [.sectionHeaders]
                        ) {
                            Section(header: PlayAndShuffle(width: geometry.size.width)) {
                                let tracks = viewModel.state.likedTracks
                                ForEach(tracks, id: \.self) { track in
                                    TrackRowC(viewModel: .init(track: track,
                                                               eventLogger: MiniVibeApp.eventLogger)) { _ in
                                        viewModel.send(.tapMenuButton)
                                    }
                                    .fullScreenCover(isPresented: $viewModel.state.isMenuOpen) {
                                        PlayerMenu(viewModel: .init(track: track,
                                                                    eventLogger: MiniVibeApp.eventLogger))
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
                .navigationBarHidden(true)
            }
        }
        .onAppear {
            viewModel.send(.appear)
        }
    }
}

struct Library_Previews: PreviewProvider {
    static var previews: some View {
        Library()
    }
}
