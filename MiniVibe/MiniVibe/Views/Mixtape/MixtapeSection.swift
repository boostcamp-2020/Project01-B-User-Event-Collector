//
//  MixtapeSection.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/08.
//

import SwiftUI

struct MixtapeSection: View {
    let width: CGFloat
    let title: String
    let mixtapes: [Mixtape]
    
    var body: some View {
        VStack(spacing: 8) {
            SectionTitle(width: width, title: title) {
                MixtapeGrid(title: title,
                            mixtapes: mixtapes)
                    .logTransition(identifier: .mixtapes,
                                   componentId: ComponentId.sectionTitle(category: title))
            }
            
            ScrollView(.horizontal, showsIndicators: false) {
                HStack(spacing: width * .spacingRatio) {
                    ForEach(mixtapes, id: \.id) { mixtape in
                        NavigationLink(
                            destination:
                                Text("MixtapeView")
                                .logTransition(identifier: .mixtape(id: mixtape.id), componentId: ComponentId.mixtapeItem)
                                ),
                            label: {
                                ThumbnailItem(title: mixtape.title,
                                              subtitle: mixtape.subTitle,
                                              imageURL: mixtape.imageUrl)
                                    .frame(width: width * .thumbnailRatio)
                            }
                        )
                    }
                    .foregroundColor(.primary)
                }
                .padding(.horizontal, width * .paddingRatio)
            }
        }
    }
}

struct MixtapeSection_Previews: PreviewProvider {
    static var previews: some View {
        MixtapeSection(width: 350, title: "Mixtapes", mixtapes: [])
    }
}
