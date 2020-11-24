//
//  Contents.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/11/24.
//

import SwiftUI

struct Contents: View {
    var body: some View {
        GeometryReader { geometry in
            ScrollView(.horizontal, showsIndicators: false) {
                HStack {
                    ForEach(0..<5) { _ in
                        ContentItem()
                            .frame(width: geometry.size.width * 0.94)
                    }
                }
                .padding(.horizontal, 8)
            }
        }
    }
}

struct Contents_Previews: PreviewProvider {
    static var previews: some View {
        Contents()
    }
}
