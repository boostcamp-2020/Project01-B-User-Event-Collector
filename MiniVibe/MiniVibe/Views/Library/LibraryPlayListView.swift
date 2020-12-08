//
//  LibraryPlayListView.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/03.
//

import SwiftUI

struct LibraryPlayListView: View {
    var body: some View {
        GeometryReader { geometry in
            let width = geometry.size.width
            ScrollView {
                LazyVGrid(
                    columns: [.init()],
                    spacing: 20,
                    pinnedViews: [.sectionHeaders]
                ) {
                    HStack {
                        Button {
                            
                        } label: {
                            Image(systemName: "checkmark.circle")
                        }
                        .padding(4)
                        Text("4개")
                        Spacer()
                        Button {
                            
                        } label: {
                            HStack(spacing: 2) {
                                Image(systemName: "arrow.up.arrow.down")
                                Text("Recently Added")
                            }
                        }
                    }
                    .foregroundColor(.black)
                    
                    HStack(spacing: 24) {
                        Image(systemName: "plus")
                            .font(.system(size: 40, weight: .ultraLight))
                            .frame(width: 80, height: 80)
                            .background(Color.secondary.opacity(0.3))
                        Text("새 플레이리스트 추가")
                        Spacer()
                    }
                    
                    ForEach(0..<10) { _ in
                        let title = "보관함 플레이리스트"
                        NavigationLink(
                            destination: PlayListView(id: 0),
                            label: {
                                LibraryPlayListRow(title: title)
                            })
                    }
                }
                .padding(.horizontal, width * .paddingRatio)
                .padding(.bottom, 70)
            }
        }
    }
}

struct LibraryPlayListView_Previews: PreviewProvider {
    static var previews: some View {
        LibraryPlayListView()
    }
}
