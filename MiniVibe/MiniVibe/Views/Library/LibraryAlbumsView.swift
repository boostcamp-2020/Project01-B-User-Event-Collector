//
//  LibraryAlbumsView.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/03.
//

import SwiftUI

struct LibraryAlbumsView: View {
    @State private var isMenuOpen = false
    
    var body: some View {
        GeometryReader { geometry in
            ScrollView {
                HStack {
                    Text("3 albums")
                    Spacer()
                    Button {
                        
                    } label: {
                        HStack(spacing: 2) {
                            Image(systemName: "arrow.up.arrow.down")
                            Text("Recently Added")
                        }
                        .foregroundColor(.primary)
                    }
                }
                LazyVGrid(
                    columns: .init(repeating: .init(), count: 2)
                ) {
                    ForEach(0..<10) { _ in
                        let title = "요즘 이 곡"
                        let subtitle = "VIBE"
                        NavigationLink(
                            destination:
                                AlbumView(viewModel: .init(id: 11, eventLogger: MiniVibeApp.eventLogger))
                                .logTransition(identifier: .album(id: 11),
                                               componentId: .albumItem)
                            ,
                            label: {
                                ThumbnailItem(title: title, subtitle: subtitle, imageURL: "")
                            }
                        )
                        .foregroundColor(.primary)
                    }
                }
                .padding(.bottom, 70)
            }
            .padding(.horizontal, geometry.size.width * .paddingRatio)
        }
    }
}

struct LibraryAlbumsView_Previews: PreviewProvider {
    static var previews: some View {
        LibraryAlbumsView()
    }
}
