//
//  ContentSection.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/11/24.
//

import SwiftUI

struct ContentSection: View {
    let width: CGFloat
    
    var body: some View {
        ScrollView(.horizontal, showsIndicators: false) {
            HStack {
                ForEach(0..<5) { _ in
                    ContentItem()
                        .frame(width: width * 0.94)
                }
            }
            .padding(.horizontal, 8)
        }
    }
}

struct ContentSection_Previews: PreviewProvider {
    static var previews: some View {
        GeometryReader { geometry in
            ContentSection(width: geometry.size.width)
        }
    }
}
