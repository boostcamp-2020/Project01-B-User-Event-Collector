//
//  UpNextList.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/11/30.
//

import SwiftUI

struct Item: Hashable {
    var title: String
}

struct UpNextList: View {
    @State private var isAutoPlay: Bool = true
    @State private var editMode = EditMode.active
    @State private var tracks: [Item] = (0..<20).map {
        Item(title: "Track #\($0)")
    }
    @State private var selectedTracks = Set<Item>()
    
    var selectionCount: Int {
        return selectedTracks.count
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
            
            ZStack(alignment: .bottom) {
                List(selection: $selectedTracks) {
                    ForEach(tracks, id: \.self) { track in
                        Text(track.title)
                    }
                    .onMove(perform: onMove(source:destination:))
                    
                    Toggle(isOn: $isAutoPlay) {
                        VStack(alignment: .leading) {
                            Text("Auto Play")
                                .font(.subheadline)
                            
                            Text("Play similar songs endlessly")
                                .font(.caption)
                                .foregroundColor(.gray)
                        }
                    }
                }
                .environment(\.editMode, .constant(EditMode.active))
                if selectedTracks.count > 0 {
                    MultiselectTabBar(
                        barItems: [AddToPlaylist(), Save(), Delete()]
                    )
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
        } else if selectionCount == tracks.count {
            Button {
                selectedTracks.removeAll()
            } label: {
                Text("Deselect All")
            }
        } else {
            Button {
                tracks.forEach { selectedTracks.insert($0) }
            } label: { Text("Select All") }
        }
    }
    
    @ViewBuilder
    var trailingBarItem: some View {
        if selectionCount > 0 {
            Button {
                selectedTracks.removeAll()
            } label: { Text("Done") }
        } else {
            Button {
                // TO DO:
                    // sheet 내리기
            } label: { Image(systemName: "chevron.down") }
        }
    }
    
    private func onMove(source: IndexSet, destination: Int) {
        tracks.move(fromOffsets: source, toOffset: destination)
    }
    
}

struct UpNextList_Previews: PreviewProvider {
    static var previews: some View {
        UpNextList()
    }
}
