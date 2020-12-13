//
//  MagazineView.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/07.
//

import SwiftUI

struct MagazineView: View {
    @Environment(\.presentationMode) var presentationMode
    let magazine: Magazine
    
    var body: some View {
        GeometryReader { geometry in
            let width = geometry.size.width

            ZStack(alignment: .topTrailing) {
                ScrollView {
                    LazyVGrid(columns: [.init(.fixed(width))],
                              pinnedViews: [.sectionHeaders]) {
                        MagazineItem(magazine: Magazine(id: magazine.id,
                                                        title: magazine.title,
                                                        imageUrl: magazine.imageUrl,
                                                        date: magazine.date,
                                                        category: magazine.category))
                        Section(header: PlayAndShuffle(width: geometry.size.width)) {
                            Text(ArticleExample.content)
                                .padding(.horizontal, width * .paddingRatio)
                            ForEach(0..<10) { index in
                                TrackRowE(viewModel: .init(track: trackinfo),
                                          order: index)
                            }
                        }
                        .padding(.horizontal, geometry.size.width * .paddingRatio)
                    }
                }
                .navigationBarHidden(true)
                
                Button {
                    presentationMode.wrappedValue.dismiss()
                } label: {
                    Image(systemName: "xmark")
                        .font(.system(size: 20))
                        .foregroundColor(Color.primary.opacity(0.8))
                        .padding(10) 
                }
                
            }
            
        }
    }
}

struct MagazineView_Previews: PreviewProvider {
    static var previews: some View {
        MagazineView(magazine: Magazine(id: 0, title: "", imageUrl: "", date: "", category: ""))
    }
}
