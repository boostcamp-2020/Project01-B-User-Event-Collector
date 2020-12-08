//
//  PlayerSliderView.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/01.
//

import SwiftUI

struct PlayerSliderView: View {
    
    let title: String
    let artist: String
    let totalDuration: String = "3:21"
    @State private var playbackTime: String? = "0:00"
    @Binding var isOpenMenu: Bool
    
    var body: some View {
        GeometryReader { geometry in
            VStack(spacing: 16) {
                trackInfo(title: title, artist: artist)
                PlayerSlider(
                    width: geometry.size.width,
                    totalDuration: totalDuration,
                    playbackTime: $playbackTime
                )
                .foregroundColor(.secondary)
                .font(.system(size: 12))
            }
        }
    }
    
    private func trackInfo(title: String, artist: String) -> some View {
        VStack(alignment: .leading,
               spacing: 3) {
            HStack {
                VStack(alignment: .leading,
                       spacing: 4) {
                    Text(title)
                        .font(.system(size: 20, weight: .bold))
                    Text(artist)
                        .font(.system(size: 16))
                        .foregroundColor(.secondary)
                }
                
                Spacer()
                
                Button {
                    isOpenMenu = true
                } label: {
                    Image(systemName: "ellipsis")
                        .foregroundColor(.black)
                }
            }
        }
    }
}

struct PlayerSliderView_Previews: PreviewProvider {
    static var previews: some View {
        PlayerSliderView(title: "포장마차", artist: "황인욱", isOpenMenu: .constant(true))
    }
}
