//
//  PlayerSlider.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/11/30.
//

import SwiftUI

struct PlayerSlider: View {
    
    let title: String
    let artist: String
    let totalDuration: String = "3:21"
    @State private var playbackTime: String = "0:00"
    @State private var percentage: Float = 30
    @State private var dragAction = false
    @State private var dragLocation: CGFloat = .zero
    
    var body: some View {
        GeometryReader { geometry in
            VStack(spacing: 16) {
                trackInfo(title: title, artist: artist)
                
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
                            .foregroundColor(.pink)
                            .frame(width: geometry.size.width * CGFloat(percentage / 100))
                    }
                    .frame(height: dragAction ? 24: 3)
                    .cornerRadius(4)
                    .gesture(
                        DragGesture(minimumDistance: 0)
                            .onChanged { value in
                                
                                let changedPercentage = Float(
                                    value.location.x / geometry.size.width * 100
                                )
                                percentage = min(max(0, changedPercentage), 100)
                                dragAction = true
                                dragLocation = value.location.x
                            }
                            .onEnded { _ in
                                dragAction = false
                            }
                    )
                    HStack {
                        Text(playbackTime)
                        Spacer()
                        Text(totalDuration)
                    }
                    .foregroundColor(.secondary)
                    .font(.system(size: 12))
                }
                .offset(y: dragAction ? -40 : 0)
                .animation(.easeInOut)
            }
        }
    }
    
    private func trackInfo(title: String, artist: String) -> some View {
        VStack(alignment: .leading,
               spacing: 3) {
            Text(title)
                .font(.system(size: 20, weight: .bold))
            
            HStack {
                Text(artist)
                    .font(.system(size: 16))
                    .foregroundColor(.secondary)
                
                Spacer()
                
                Button {
                    
                } label: {
                    Image(systemName: "ellipsis")
                        .foregroundColor(.black)
                }
            }
        }
    }
}

struct PlayerSlider_Previews: PreviewProvider {
    static var previews: some View {
        PlayerSlider(title: "노래 제목", artist: "가수 이름")
    }
}
