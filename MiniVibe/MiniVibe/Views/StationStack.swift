//
//  StationStack.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/11/25.
//

import SwiftUI

struct StationStack: View {
    let width: CGFloat
    
    var body: some View {
        ScrollView(.horizontal, showsIndicators: false) {
            HStack(spacing: width * 0.02) {
                ForEach(0..<10) { _ in
                    StationItem()
                        .frame(width: width * 0.45)
                }
                
            }
            .padding(.horizontal, width * 0.04)
        }
    }
}

struct StationStack_Previews: PreviewProvider {
    static var previews: some View {
        StationStack(width: 100)
    }
}
