//
//  PlayerPreview.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/11/26.
//

import SwiftUI
import KingfisherSwiftUI

struct PlayerPreview: View {
    @EnvironmentObject private var nowPlaying: NowPlaying
    let coordinate: CGRect
    private let height: CGFloat = 50
    private let edgeInset = EdgeInsets(top: 5, leading: 10, bottom: 5, trailing: 10)
    
    var body: some View {
        VStack {
            HStack {
                playingTrackInfo()
                
                Spacer()
                    
                previewControlIcons()
                    .font(.system(size: 20))
            }
            .frame(height: height)
            .padding(edgeInset)
            .background(Color(.systemGray6).opacity(0.99))
            .position(
                x: coordinate.width / 2,
                y: coordinate.height - (height / 2 + edgeInset.bottom)
            )
        }
    }
    
    @ViewBuilder private func playingTrackInfo() -> some View {
        KFImage(URL(string: nowPlaying.playingTrack?.album.imageUrl ?? ""))
            .resizable()
            .frame(width: height, height: height)
        
        VStack(alignment: .leading) {
            Text(nowPlaying.playingTrack?.title ?? "What's on today?")
                .font(.system(size: 15))
            
            Text(nowPlaying.playingTrack?.artist.name ?? "Tap the play button")
                .font(.system(size: 12))
                .foregroundColor(.secondary)
        }
    }

    private func previewControlIcons() -> some View {
        let emptyUpNext: Bool = nowPlaying.upNext.isEmpty
        let iconColor: Color = emptyUpNext ? Color.secondary : Color.black
            
        return HStack(spacing: 20) {
            Button {
                nowPlaying.isPlaying.toggle()
            } label: {
                nowPlaying.isPlaying ? Image(systemName: "pause.fill") : Image(systemName: "play.fill")
            }
            .foregroundColor(.black)
            
            Button {
                nowPlaying.playNextTrack()
            } label: {
                Image(systemName: "forward.fill")
            }
            .disabled(emptyUpNext)
            .foregroundColor(iconColor)
            
            Button {
                nowPlaying.isPlayerPresented = true
            } label: {
                Image(systemName: "music.note.list")
            }
            .disabled(emptyUpNext)
            .foregroundColor(iconColor)
        }
    }
}

struct PlayerPreview_Previews: PreviewProvider {
    static var previews: some View {
        GeometryReader { geometry in
            PlayerPreview(coordinate: geometry.frame(in: .global))
        }
    }
}
