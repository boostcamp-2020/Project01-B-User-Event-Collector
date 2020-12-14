//
//  ArtistSection.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/01.
//

import SwiftUI

struct ArtistSection: View {
    @StateObject private var viewModel = ArtistSectionViewModel()
    let width: CGFloat
    let sectionTitle: String
    
    var body: some View {
        VStack(alignment: .leading) {
            Text(sectionTitle)
                .font(.system(size: 16.5, weight: .bold))
                .foregroundColor(.primary)
                .padding(.horizontal, width * .paddingRatio)
            ScrollView(.horizontal,
                       showsIndicators: false) {
                HStack(spacing: 16) {
                    ForEach(viewModel.state.artists, id: \.id) { artist in
                        NavigationLink(
                            destination:
                                ArtistView(id: artist.id, viewModel: .init(id: artist.id))
                                .logTransition(identifier: .artist(id: artist.id),
                                               componentId: .artistItem)
                            ,
                            label: {
                                ArtistItem(artist: artist)
                            })
                    }
                }
                .padding(.horizontal, width * .paddingRatio)
            }
        }
        .onAppear {
            viewModel.send(.appear)
        }
    }
}

struct ArtistSection_Previews: PreviewProvider {
    static var previews: some View {
        ArtistSection(width: 350, sectionTitle: "비슷한 아티스트")
            .previewLayout(.fixed(width: 400, height: 200))
    }
}
