//
//  Station.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/11/24.
//

import SwiftUI

struct Station: View {
    var body: some View {
        GeometryReader { geometry in
            ScrollView(.horizontal, showsIndicators: false) {
                HStack {
                    ForEach(0..<10) { _ in
                        StationItem()
                            .frame(width: geometry.size.width * 0.5)
                    }
                    
                }
            }
            
        }
    }
}

struct Station_Previews: PreviewProvider {
    static var previews: some View {
        Station()
    }
}
