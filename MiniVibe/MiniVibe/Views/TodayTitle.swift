//
//  TodayTitle.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/11/24.
//

import SwiftUI

struct TodayTitle: View {
    var body: some View {
        HStack {
            Button {
                
            } label: {
                Text("#내돈내듣 VIBE")
                    .foregroundColor(.black)
                    .font(.title)
                    .fontWeight(.heavy)
            }
            
            Spacer()
            
            Button {
                
            } label: {
                Image(systemName: "person")
                    .clipShape(Circle())
                    .font(.system(size: 24))
                    .frame(width: 60, height: 60)
            }
        }
        .padding(.horizontal)
    }
}

struct TodayTitle_Previews: PreviewProvider {
    static var previews: some View {
        TodayTitle()
    }
}
