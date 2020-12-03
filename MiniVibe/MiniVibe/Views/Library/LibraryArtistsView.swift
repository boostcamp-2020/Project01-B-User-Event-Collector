//
//  LibraryArtistsView.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/03.
//

import SwiftUI

struct LibraryArtistsView: View {
    var body: some View {
        GeometryReader { geometry in
            let width = geometry.size.width
            ScrollView {
                LazyVGrid(
                    columns: [.init(.fixed(geometry.size.width))],
                    spacing: 20,
                    pinnedViews: [.sectionHeaders]
                ) {
                    Section(header: boomAndChillButton(width: width)) {
                        VStack {
                            HStack {
                                Button {
                                    
                                } label: {
                                    Image(systemName: "checkmark.circle")
                                }
                                .padding(4)
                                Text("10명")
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
                            
                            ForEach(0..<10) { _ in
                                LibraryArtistRow(artist: "방탄소년단")
                            }
                        }
                    }
                    .padding(.horizontal, geometry.size.width * .paddingRatio)
                }
                .padding(.bottom, 70)
            }
        }
    }
    
    @ViewBuilder
    func boomAndChillButton(width: CGFloat) -> some View {
        HStack(spacing: width * .spacingRatio) {
            Button(action: {}, label: {
                HStack {
                    Image(systemName: "shuffle")
                    Text("BOOM")
                }
                .padding()
                .foregroundColor(.purple)
                .frame(width: width * .thumbnailRatio)
            })
            .background(Color.secondary.opacity(0.15))
            .clipShape(RoundedRectangle(cornerRadius: 5))
            
            Button(action: {}, label: {
                HStack {
                    Image(systemName: "shuffle")
                    Text("CHILL")
                }
                .padding()
                .foregroundColor(.blue)
                .frame(width: width * .thumbnailRatio)
            })
            .background(Color.secondary.opacity(0.15))
            .clipShape(RoundedRectangle(cornerRadius: 5))
        }
        .background(Color.white)
        
    }
}

struct LibraryArtistsView_Previews: PreviewProvider {
    static var previews: some View {
        LibraryArtistsView()
    }
}
