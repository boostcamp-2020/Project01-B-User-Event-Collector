//
//  TodayTitle.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/11/24.
//

import SwiftUI

struct TodayTitle: View {
    @EnvironmentObject private var eventLogger: EventLogger
    
    var body: some View {
        HStack {
            Button {
                
            } label: {
                Text("#내돈내듣 VIBE")
                    .foregroundColor(.black)
                    .font(.title)
                    .fontWeight(.heavy)
            }
            .logSubscription(eventLogger: eventLogger,
                             componentId: "")
            
            Spacer()
            NavigationLink(
                destination: ProfileView(),
                label: {
                    Image(systemName: "person")
                        .clipShape(Circle())
                        .font(.system(size: 24))
                        .frame(width: 60, height: 60)
                })
        }
    }
}

struct TodayTitle_Previews: PreviewProvider {
    static var previews: some View {
        TodayTitle()
            .previewLayout(.fixed(width: 375, height: 100))
    }
}
