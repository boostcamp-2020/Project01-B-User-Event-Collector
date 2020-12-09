//
//  UpNextList.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/11/30.
//

import SwiftUI

struct UpNextList: View {
    init() {
        UITableView.appearance().showsVerticalScrollIndicator = false
    }

    @State private var editMode = EditMode.active
    @EnvironmentObject private var nowPlaying: NowPlaying
    
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
            
            VStack(spacing: 0) {
                List(selection: $nowPlaying.selectedTracks) {
                    ForEach(nowPlaying.upNext, id: \.self) { track in
                        HStack(spacing: 10) {
                            AsyncImage(urlString: track.imageUrl)
                                .frame(width: 50, height: 50)
                            VStack(alignment: .leading) {
                                Text(track.title)
                                Text(track.artist.name)
                            }
                        }
                    }
                    .onMove(perform: onMove(source:destination:))
                }
                .environment(\.editMode, .constant(EditMode.active))
                
                if selectionCount > 0 {
                    MultiselectTabBar(barItems: [AddToPlaylist(), Save(), Delete()])
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
        nowPlaying.upNext.move(fromOffsets: source, toOffset: destination)
        print("source \(source.first!) -> destination \(destination)")
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
