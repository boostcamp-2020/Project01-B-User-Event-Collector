//
//  MixtapeGrid.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/11/25.
//

import SwiftUI

struct MixtapeGrid: View {
    @EnvironmentObject private var eventLogger: EventLogger
    let title: String
    let mixtapes: [Mixtape]
    
    var body: some View {
        GeometryReader { geometry in
            ScrollView {
                LazyVGrid(
                    columns: .init(repeating: .init(), count: 2)
                ) {
                    ForEach(mixtapes, id: \.id) { mixtape in
                        NavigationLink(
                            destination: Text("MixtapeView")
                                .logTransition(eventLogger: eventLogger, identifier: .mixtape(id: mixtape.id)),
                            label: {
                                ThumbnailItem(title: mixtape.title,
                                              subtitle: mixtape.subTitle,
                                              imageURL: mixtape.imageUrl)
                            }
                        )
                        .foregroundColor(.black)
                    }
                }
                .padding(.horizontal, geometry.size.width * .paddingRatio)
                .padding(.bottom, 70)
            }
            .navigationTitle(title)
            .navigationBarTitleDisplayMode(.inline)
            .navigationBarItems(
                trailing: Button {
                    
                } label: {
                    Text("취향 설정")
                        .foregroundColor(.black)
                        .font(.system(size: 16))
                        .fontWeight(.regular)
                }
            )
        }
    }
}

struct MixtapeGrid_Previews: PreviewProvider {
    static var previews: some View {
        NavigationView {
            MixtapeGrid(title: "나를 위한 믹스테잎", mixtapes: [])
        }
    }
}