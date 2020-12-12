//
//  TrackRowA.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/11/23.
//

import SwiftUI
import KingfisherSwiftUI

struct TrackRowA: View {
    @EnvironmentObject private var nowPlaying: NowPlaying
    @State private var isMenuOpen = false
    @StateObject private var viewModel: TrackViewModel
    private let order: Int
    
    init(viewModel: TrackViewModel, order: Int) {
        self._viewModel = StateObject(wrappedValue: viewModel)
        self.order = order
    }
    
    var body: some View {
        let track = viewModel.track
        HStack {
            NavigationLink(destination:
                            AlbumView(viewModel: .init(id: track.album.id))
                            .logTransition(identifier: .album(id: track.album.id),
                                           componentId: .trackRowThumbnail)
            ) {
                KFImage(URL(string: track.album.imageUrl))
                    .resizable()
                    .frame(width: 50, height: 50)
                    .border(Color.gray, width: 0.7)
            }
            
            Button {
                nowPlaying.addTrack(track: viewModel)
            } label: {
                Text("\(order)")
                    .font(.title3)
                    .padding(.horizontal, 4)
                    .foregroundColor(.black)
                
                VStack(alignment: .leading, spacing: 4) {
                    Spacer()
                    Text(track.title)
                        .font(.system(size: 17))
                        .foregroundColor(.black)
                    
                    Text(track.artist.name)
                        .font(.system(size: 13))
                        .foregroundColor(.secondary)
                    Spacer()
                }
                Spacer()
            }
            
            Button {
                isMenuOpen = true
            } label: {
                Image(systemName: "ellipsis")
                    .foregroundColor(.black)
                    .padding()
            }
        }
        .fullScreenCover(isPresented: $isMenuOpen) {
            PlayerMenu(viewModel: viewModel)
        }
    }
}

struct TrackRow_Previews: PreviewProvider {
    static var previews: some View {
        TrackRowA(viewModel: .init(track: trackinfo), order: 3)
            .previewLayout(.fixed(width: 375, height: 80))
    }
}
