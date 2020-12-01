//
//  ThumbnailGrid.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/01.
//

import SwiftUI

struct ThumbnailGrid: View {
    var body: some View {
        GeometryReader { geometry in
            ScrollView {
                LazyVGrid(
                    columns: .init(repeating: .init(), count: 2)
                ) {
                    ForEach(0..<10) { _ in
                        ThumbnailItem()
                    }
                }
                .padding(.horizontal, geometry.size.width * .paddingRatio)
                .padding(.vertical)
            }
        }
    }
}

struct ThumbnailGrid_Previews: PreviewProvider {
    static var previews: some View {
        ThumbnailGrid()
    }
}
