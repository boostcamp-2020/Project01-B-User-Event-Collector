//
//  StationSection.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/11/24.
//

import SwiftUI

struct StationSection: View {
    @EnvironmentObject private var eventLogger: EventLogger
    let width: CGFloat
    let title: String
    
    var body: some View {
        VStack {
            SectionTitle(width: width, title: title) {
                StationList()
                    .logTransition(eventLogger: eventLogger,
                                   identifier: .station,
                                   componentId: .sectionTitle(category: title))
            }
            
            StationStack(width: width)
        }
    }
}

struct StationSection_Previews: PreviewProvider {
    static var previews: some View {
        StationSection(width: 375, title: "스테이션")
            .previewLayout(.fixed(width: 375, height: 200))
    }
}
