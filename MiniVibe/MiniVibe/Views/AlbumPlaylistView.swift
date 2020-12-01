//
//  AlbumPlaylistView.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/01.
//

import SwiftUI

struct AlbumPlaylistView: View {
    var body: some View {
        GeometryReader { geometry in
            ScrollView {
                HStack {
                    Button {
                        // TO DO:
                            // 앨범 관련 글 열기
                    } label: { Image("album") }
                    .
                    
                    VStack(alignment: .leading) {
                        Text("앨범 이름")
                        Text("아티스트")
                        Spacer()
                        Button {
                            // TO DO:
                                // 앨범 전체 곡 다운로드
                        } label: { Image(systemName: "square.and.arrow.down")}
                    }
                }
                LazyVGrid(
                    columns: [.init(.fixed(geometry.size.width))],
                    pinnedViews: [.sectionHeaders]
                ) {
                    Section(header: PlayAndShuffle(width: geometry.size.width)) {
                        ForEach(0..<100) { _ in
                            TrackRow()
                        }
                    }
                    .padding(.horizontal, geometry.size.width * .paddingRatio)
                }
                //.navigationTitle(title)
                .navigationBarTitleDisplayMode(.inline)
                .navigationBarItems(
                    trailing: Button {
                        
                    } label: {
                        
                        Image(systemName: "checkmark.circle")
                            .font(.system(size: 17))
                            .foregroundColor(.black)
                    }
                )
            }
        }
    }
}

struct AlbumPlaylistView_Previews: PreviewProvider {
    static var previews: some View {
        AlbumPlaylistView()
    }
}
