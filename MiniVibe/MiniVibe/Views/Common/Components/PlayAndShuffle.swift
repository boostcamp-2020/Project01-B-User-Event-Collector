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
            Button {
                
            } label: {
                HStack {
                    Image(systemName: "play.fill")
                    Text("PLAY")
                }
                .padding()
                .foregroundColor(.primary)
                .frame(width: width * .thumbnailRatio)
            }
            .background(Color.playAndShuffle)
            .clipShape(RoundedRectangle(cornerRadius: 5))
            
            Button {
                
            } label: {
                HStack {
                    Image(systemName: "shuffle")
                    Text("SHUFFLE")
                }
                .padding()
                .foregroundColor(.primary)
                .frame(width: width * .thumbnailRatio)
            }
            .background(Color.playAndShuffle)
            .clipShape(RoundedRectangle(cornerRadius: 5))
        }
    }
}

struct PlayAndShuffle_Previews: PreviewProvider {
    static var previews: some View {
        PlayAndShuffle(width: 375)
            .previewLayout(.fixed(width: 375, height: 80))
            .previewInAllColorSchemes
    }
}
