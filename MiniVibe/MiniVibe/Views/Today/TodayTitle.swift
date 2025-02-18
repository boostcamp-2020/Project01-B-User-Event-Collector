//
//  TodayTitle.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/11/24.
//

import SwiftUI

struct TodayTitle: View {
    let width: CGFloat
    
    var body: some View {
        HStack {
            Text("#내돈내듣 VIBE")
                .foregroundColor(.primary)
                .font(.title)
                .fontWeight(.heavy)
                .logSubscription(componentId: "mainSubscribe")
            
            Spacer()
            
            Image(systemName: "person")
                .clipShape(Circle())
                .font(.system(size: 24))
                .frame(width: 60, height: 60)

        }
    }
}

struct TodayTitle_Previews: PreviewProvider {
    static var previews: some View {
        GeometryReader { geometry in
            TodayTitle(width: geometry.size.width)
                .previewLayout(.fixed(width: 375, height: 100))
        }
    }
}
