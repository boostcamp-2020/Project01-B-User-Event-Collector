//
//  UpNextList.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/11/30.
//

import SwiftUI
import KingfisherSwiftUI

struct UpNextList: View {
    init() {
        UITableView.appearance().showsVerticalScrollIndicator = false
    }
    
    @EnvironmentObject private var nowPlaying: NowPlayingViewModel
    @State private var editMode = EditMode.active
    
    var body: some View {
        VStack {
            HStack {
                leadingBarItem
                
                Spacer()
                
                headerTitle
                
                Spacer()
                
                trailingBarItem
            }
            .padding()
            .foregroundColor(.primary)
            
            VStack(spacing: 0) {
                List(selection: $nowPlaying.state.selectedTracks) {
                    ForEach(nowPlaying.state.upNext, id: \.self) { viewModel in
                        HStack(spacing: 10) {
                            KFImage(URL(string: viewModel.state.track.album.imageUrl))
                                .placeholder {
                                    Image("placeholder")
                                        .resizable()
                                }
                                .resizable()
                                .frame(width: 50, height: 50)
                            VStack(alignment: .leading) {
                                Text(viewModel.state.track.title)
                                    .font(.system(size: 13))
                                    .foregroundColor(.primary)
                                
                                Text(viewModel.state.track.artist.name)
                                    .font(.system(size: 11))
                                    .foregroundColor(.secondary)
                            }
                        }
                    }
                    .onMove(perform: { (source, destination) in
                        nowPlaying.send(.moveTrack(source: source, destination: destination))
                    })
                }
                .environment(\.editMode, .constant(EditMode.active))
                
                if !nowPlaying.isEmptySelects {
                    MultiselectTabBar()
                        .ignoresSafeArea(.all, edges: .bottom)
                        .frame(height: 48)
                }
            }
        }
    }
    
    var headerTitle: some View {
        !nowPlaying.isEmptySelects ?
            Text("\(nowPlaying.state.selectedTracks.count) song(s) selected") :
            Text("Up next")
    }
    
    @ViewBuilder
    var leadingBarItem: some View {
        if nowPlaying.isEmptySelects {
            Button {

            } label: {
                Image(systemName: "magnifyingglass")
            }
        } else {
            Button {
                nowPlaying.send(.selectButtonTapped)
            } label: {
                Text(nowPlaying.isAllSelected ? "Deselect All" : "Select All")
            }
        }
    }
    
    @ViewBuilder
    var trailingBarItem: some View {
        if !nowPlaying.isEmptySelects {
            Button {
                nowPlaying.send(.selectButtonTapped)
            } label: { Text("Done") }
        } else {
            Button {
                nowPlaying.send(.togglePlayer)
            } label: { Image(systemName: "chevron.down") }
        }
    }
    
}

struct UpNextList_Previews: PreviewProvider {
    static var previews: some View {
        UpNextList()
    }
}
