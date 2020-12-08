//
//  MixtapeSection.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/08.
//

import SwiftUI

struct MixtapeSection: View {
    @EnvironmentObject private var eventLogger: EventLogger
    let width: CGFloat
    let title: String
    let mixtapes: [Mixtape]
    
    var body: some View {
        VStack(spacing: 8) {
            SectionTitle(width: width, title: title) {
                MixtapeGrid(title: title,
                            mixtapes: mixtapes)
                    .logTransition(eventLogger: eventLogger,
                                   identifier: .mixtapes)
            }
            
            ScrollView(.horizontal, showsIndicators: false) {
                HStack(spacing: width * .spacingRatio) {
                    ForEach(mixtapes, id: \.id) { mixtape in
                        NavigationLink(
                            destination:
                                Text("MixtapeView")
                                .logTransition(eventLogger: eventLogger, identifier: .mixtape(id: mixtape.id))
                            ,
                            label: {
                                ThumbnailItem(title: mixtape.title,
                                              subtitle: mixtape.subTitle,
                                              imageURL: mixtape.imageUrl)
                                    .frame(width: width * .thumbnailRatio)
                            }
                        )
                    }
                    .foregroundColor(.black)
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
