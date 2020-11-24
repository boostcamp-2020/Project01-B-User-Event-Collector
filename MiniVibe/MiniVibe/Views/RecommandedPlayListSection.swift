//
//  RecommandedPlayListSection.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/11/24.
//

import SwiftUI

struct RecommandedPlayListSection: View {
    var body: some View {
        VStack {
            GeometryReader { geometry in
                let width = geometry.size.width
                
                SectionTitle()
                
                ScrollView(.horizontal) {
                    LazyHStack(spacing: width * 0.03) {
                        ForEach(0..<5) { _ in
                            RecommandedPlayListItem()
                                .frame(width: width * 0.9)
                        }
                    }
                    .padding(.horizontal, width * 0.03)
                }
            }
        }
    }
}

struct RecommandedPlayListSection_Previews: PreviewProvider {
    static var previews: some View {
        RecommandedPlayListSection()
    }
}
