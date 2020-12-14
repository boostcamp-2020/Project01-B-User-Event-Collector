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
    
    @EnvironmentObject private var nowPlaying: NowPlaying
    @State private var editMode = EditMode.active
    private var selectionCount: Int {
        return nowPlaying.selectedTracks.count
    }
    
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
                List(selection: $nowPlaying.selectedTracks) {
                    ForEach(nowPlaying.upNext, id: \.self) { viewModel in
                        HStack(spacing: 10) {
                            KFImage(URL(string: viewModel.track.album.imageUrl))
                                .placeholder {
                                    Image("placeholder")
                                        .resizable()
                                }
                                .resizable()
                                .frame(width: 50, height: 50)
                            VStack(alignment: .leading) {
                                Text(viewModel.track.title)
                                    .font(.system(size: 13))
                                    .foregroundColor(.primary)
                                
                                Text(viewModel.track.artist.name)
                                    .font(.system(size: 11))
                                    .foregroundColor(.secondary)
                            }
                        }
                    }
                    .onMove(perform: onMove(source:destination:))
                }
                .environment(\.editMode, .constant(EditMode.active))
                
                if nowPlaying.selectedTracks.count > 0 {
                    MultiselectTabBar()
                        .ignoresSafeArea(.all, edges: .bottom)
                        .frame(height: 48)
                }
            }
        }
    }
    
    var headerTitle: some View {
        selectionCount > 0 ?
            Text("\(selectionCount) song(s) selected") :
            Text("Up next")
    }
    
    @ViewBuilder
    var leadingBarItem: some View {
        if selectionCount == 0 {
            Button {
                // TO DO:
                // 현재 [Up Next] 트랙 내에서 검색
            } label: {
                Image(systemName: "magnifyingglass")
            }
        } else if selectionCount == nowPlaying.upNext.count {
            Button {
                nowPlaying.selectedTracks.removeAll()
            } label: {
                Text("Deselect All")
            }
        } else {
            Button {
                nowPlaying.upNext.forEach { nowPlaying.selectedTracks.insert($0) }
            } label: { Text("Select All") }
        }
    }
    
    private func onMove(source: IndexSet, destination: Int) {
        guard let sourceIndex = source.first else { return }
        nowPlaying.upNext.move(fromOffsets: source, toOffset: destination)
        let destinationIndex = sourceIndex < destination ?  destination - 1 : destination
        if sourceIndex != destinationIndex {
            MiniVibeApp.eventLogger.send(MoveTrackLog(userId: 0,
                                          trackId: nowPlaying.upNext[destinationIndex].track.id,
                                          source: sourceIndex,
                                          destination: destinationIndex))
        }
    }
    
    @ViewBuilder
    var trailingBarItem: some View {
        if selectionCount > 0 {
            Button {
                nowPlaying.selectedTracks.removeAll()
            } label: { Text("Done") }
        } else {
            Button {
                // TO DO:
                // sheet 내리기
            } label: { Image(systemName: "chevron.down") }
        }
    }
    
}

struct UpNextList_Previews: PreviewProvider {
    static var previews: some View {
        UpNextList()
    }
}
