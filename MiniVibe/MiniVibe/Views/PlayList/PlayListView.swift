//
//  PlayListView.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/03.
//

import SwiftUI

struct PlayListView: View {
    init(viewModel: PlaylistViewModel) {
        self._viewModel = StateObject(wrappedValue: viewModel)
    }
    
    @EnvironmentObject private var eventLogger: EventLogger
    @StateObject private var viewModel: PlaylistViewModel
    
    var body: some View {
        if let playlist = viewModel.playlist {
            GeometryReader { geometry in
                let width: CGFloat = geometry.size.width
                if viewModel.isOpenArticle {
                    Article(isOpenArticle: $viewModel.isOpenArticle,
                            imageURL: playlist.imageUrl,
                            title: playlist.title,
                            subtitle: playlist.subTitle ?? "",
                            content: playlist.description ?? "")
                        .logTransition(eventLogger: eventLogger,
                                       identifier: .article,
                                       componentId: .playlistDescription)
                } else {
                    ScrollView {
                        VStack(spacing: 36) {
                            VStack {
                                PlaylistAlbumInfo(isOpenArticle: $viewModel.isOpenArticle,
                                                  imageURL: playlist.imageUrl ,
                                                  title: playlist.title,
                                                  subtitle: playlist.subTitle ?? "",
                                                  description: "",
                                                  article: playlist.description ?? "")
                                    .padding(.vertical, 10)
                                
                                LazyVGrid(
                                    columns: [.init(.fixed(geometry.size.width))],
                                    pinnedViews: [.sectionHeaders]
                                ) {
                                    Section(header: PlayAndShuffle(width: geometry.size.width)) {
                                        ForEach(playlist.tracks ?? [], id: \.id) { track in
                                            TrackRowC(viewModel: TrackViewModel(track: track,
                                                                                eventLogger: eventLogger)) {
                                                viewModel.send(.showTrackMenu(info: $0))
                                            }
                                        }
                                    }
                                    .padding(.horizontal, geometry.size.width * .paddingRatio)
                                }
                            }
                            
                            ArtistSection(width: width,
                                          sectionTitle: "참여 아티스트")
                        }
                        .padding(.bottom, 70)
                    }
                    .navigationBarTitleDisplayMode(.inline)
                    .navigationBarItems(
                        trailing: trailingBarButtons
                    )
                    .fullScreenCover(isPresented: $viewModel.showSheet) {
                        switch viewModel.activeSheet {
                        case .playlist:
                            PlayListMenu(viewModel: viewModel)
                                .logTransition(eventLogger: eventLogger,
                                               identifier: .playlistMenu(id: playlist.id),
                                               componentId: .playlistMenuButton)
                        case let .track(trackViewModel):
                            PlayerMenu(viewModel: trackViewModel)
                                .logTransition(eventLogger: eventLogger,
                                               identifier: .playerMenu(id: trackViewModel.track.id),
                                               componentId: .trackMenuButton)
                        }
                    }
                }
            }
        } else {
            Color.clear
                .onAppear {
                    viewModel.send(.appear)
                }
        }
    }
    
    var trailingBarButtons: some View {
        HStack(spacing: 10) {
            Button {
                viewModel.send(.like)
            } label: {
                Image(systemName: "heart")
            }
            
            Button {
                
            } label: {
                Image(systemName: "checkmark.circle")
            }
            
            Button {
                viewModel.send(.showPlaylistMenu)
            } label: {
                Image(systemName: "ellipsis")
            }
            .padding(.vertical)
        }
        .font(.system(size: 17))
        .foregroundColor(.black)
    }
    
}

struct PlayListView_Previews: PreviewProvider {
    static var previews: some View {
        NavigationView {
            PlayListView(viewModel: .init(id: 0, eventLogger: EventLogger(persistentContainer: .init())))
        }
    }
}
