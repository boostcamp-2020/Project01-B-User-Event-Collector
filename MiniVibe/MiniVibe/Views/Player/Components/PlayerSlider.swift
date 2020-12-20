//
//  PlayerSlider.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/11/30.
//

import SwiftUI

struct PlayerSlider: View {
    let width: CGFloat
    let totalDuration: String
    @Binding var playbackTime: String?
    @State private var percentage: Float = 30
    @State private var dragAction = false
    @State private var dragLocation: CGFloat = .zero
    
    var body: some View {
        
        VStack(alignment: .leading) {
            if dragAction {
                Text("\(Int(percentage))")
                    .foregroundColor(.secondary)
                    .offset(x: dragLocation)
            }
            
            ZStack(alignment: .leading) {
                Rectangle()
                    .foregroundColor(.secondary)
                
                Rectangle()
                    .foregroundColor(.accentColor)
                    .frame(width: width * CGFloat(percentage / 100))
            }
            .frame(height: dragAction ? 24 : 3)
            .cornerRadius(4)
            .gesture(
                DragGesture(minimumDistance: 0)
                    .onChanged { value in
                        let changedPercentage = Float(
                            value.location.x / width * 100
                        )
                        percentage = min(max(0, changedPercentage), 100)
                        dragAction = true
                        dragLocation = value.location.x
                    }
                    .onEnded { _ in
                        dragAction = false
                    }
            )
            
            if let playbackTime = playbackTime {
                HStack {
                    Text("\(playbackTime)")
                    
                    Spacer()
                    
                    Text("\(totalDuration)")
                }
            }
        }
        .offset(y: dragAction ? -40 : 0)
        .animation(.easeInOut)
    }
}

struct PlayerSlider_Previews: PreviewProvider {
    static var previews: some View {
        GeometryReader { geometry in
            PlayerSlider(
                width: geometry.size.width,
                totalDuration: "3:21",
                playbackTime: .constant("0:00")
            )
        }
    }
}
