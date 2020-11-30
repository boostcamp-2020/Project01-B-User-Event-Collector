//
//  PlayAndShuffle.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/11/25.
//

import SwiftUI

struct PlayAndShuffle: View {
    let width: CGFloat
    
    var body: some View {
        HStack(spacing: width * .spacingRatio) {
            Button(action: /*@START_MENU_TOKEN@*/{}/*@END_MENU_TOKEN@*/, label: {
                HStack {
                    Image(systemName: "play.fill")
                    Text("PLAY")
                }
                .padding()
                .foregroundColor(.black)
                .frame(width: width * .thumbnailRatio)
            })
            .background(Color.secondary.opacity(0.15))
            .clipShape(RoundedRectangle(cornerRadius: 5))
            
            Button(action: /*@START_MENU_TOKEN@*/{}/*@END_MENU_TOKEN@*/, label: {
                HStack {
                    Image(systemName: "shuffle")
                    Text("SHUFFLE")
                }
                .padding()
                .foregroundColor(.black)
                .frame(width: width * .thumbnailRatio)
            })
            .background(Color.secondary.opacity(0.15))
            .clipShape(RoundedRectangle(cornerRadius: 5))
        }
        .background(Color.white)
    }
}

struct PlayAndShuffle_Previews: PreviewProvider {
    static var previews: some View {
        PlayAndShuffle(width: 375)
            .previewLayout(.fixed(width: 375, height: 80))
    }
}
