//
//  MagazineSection.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/11/24.
//

import SwiftUI

struct MagazineSection: View {
    @EnvironmentObject private var eventLogger: EventLogger
    let width: CGFloat
    let title = "매거진"
    let magazines: [Magazine]
    
    var body: some View {
        VStack {
            SectionTitle(width: width, title: title) {
                ThumbnailList(info: .magazine(data: magazines), navigationTitle: title)
                    .logTransition(eventLogger: eventLogger,
                                   identifier: .magazineList,
                                   componentId: .magazineItem)
            }
            
            ScrollView(.horizontal, showsIndicators: false) {
                HStack(spacing: width * .spacingRatio) {
                    ForEach(magazines, id: \.id) {magazine in
                        NavigationLink(destination:
                                        MagazineView(magazine: magazine)
                                        .logTransition(eventLogger: eventLogger,
                                                       identifier: .magazine(id: magazine.id),
                                                       componentId: .magazineItem)
                        ) {
                            MagazineItem(magazine: magazine)
                                .frame(width: width * .sectionRatio)
                        }
                    }
                }
                .padding(.horizontal, width * .paddingRatio)
            }
        }
    }
}

struct MagazineSection_Previews: PreviewProvider {
    static var previews: some View {
        MagazineSection(width: 375, magazines: [])
            .previewLayout(.fixed(width: 375, height: 450))
    }
}
