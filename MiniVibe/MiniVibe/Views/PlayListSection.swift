//
//  PlayListSection.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/11/24.
//

import SwiftUI

struct PlayListSection: View {
    let width: CGFloat
    
    var body: some View {
        VStack(spacing: 8) {
            SectionTitle(width: width)
            ScrollView(.horizontal, showsIndicators: false) {
                HStack(spacing: width * 0.02) {
                    ForEach(0..<10) { _ in
                        PlayListItem()
                            .frame(width: width * 0.45)
                    }
                }
                .padding(.horizontal, width * 0.02)
            }
        }
    }
}

struct PlayListStack_Previews: PreviewProvider {
    static var previews: some View {
        PlayListSection(width: 200)
    }
}
