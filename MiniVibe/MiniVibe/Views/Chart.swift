//
//  Chart.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/11/23.
//

import SwiftUI

struct Chart: View {
    var body: some View {
        VStack {
            SectionTitle()
            GeometryReader { geometry in
                ScrollView(.horizontal, showsIndicators: false) {
                    LazyHGrid(rows: .init(repeating: .init(), count: 5)) {
                        ForEach(0..<30) { _ in
                            TrackRow()
                        }
                        .frame(width: geometry.size.width)
                    }
                }
            }
        }
    }
}

struct Chart_Previews: PreviewProvider {
    static var previews: some View {
        Chart()
    }
}
