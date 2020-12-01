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
            .navigationBarTitle(
                selectionCount > 0 ?
                    Text("\(selectionCount) song(s) selected") :
                    Text("Up next"),
                displayMode: .inline
            )
            .navigationBarItems(
                leading: leadingBarItem,
                trailing: trailingBarItem
            )
            .environment(\.editMode, .constant(EditMode.active))
            
            if selectedTracks.count > 0 {
                MultiselectTabBar(
                    barItems: [AddToPlaylist(), Save(), Delete()]
                )
            }
        }
    }
    
    var leadingBarItem: AnyView {
        if selectionCount == 0 {
            return AnyView(Button {
                // TO DO:
                    // 현재 [Up Next] 트랙 내에서 검색
            } label: {
                Image(systemName: "magnifyingglass")
            })
        } else if selectionCount == tracks.count {
            return AnyView(Button {
                selectedTracks.removeAll()
            } label: {
                Text("Deselect All")
            })
        } else {
            return AnyView(Button {
                tracks.forEach { selectedTracks.insert($0) }
            } label: { Text("Select All") })
        }
    }
    
    var trailingBarItem: AnyView {
        selectionCount > 0 ?
            AnyView(Button {
                selectedTracks.removeAll()
            } label: { Text("Done") }) :
            AnyView(Button {
                // TO DO:
                    // sheet 내리기
            } label: { Image(systemName: "chevron.down") })
    }
    
    private func onMove(source: IndexSet, destination: Int) {
        tracks.move(fromOffsets: source, toOffset: destination)
    }
    
}

struct UpNextList_Previews: PreviewProvider {
    static var previews: some View {
        NavigationView {
            UpNextList()
        }
    }
}
