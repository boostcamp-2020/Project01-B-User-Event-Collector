//
//  PlayerPreview.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/11/26.
//

import SwiftUI
import KingfisherSwiftUI

struct PlayerPreview: View {
    @EnvironmentObject private var nowPlaying: NowPlayingViewModel
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
        let track = nowPlaying.playingTrack?.state.track
        KFImage(URL(string: track?.album.imageUrl ?? ""))
            .placeholder {
                Image("placeholder")
                    .resizable()
            }
            .resizable()
            .frame(width: height, height: height)
        
        VStack(alignment: .leading) {
            Text(track?.title ?? "What's on today?")
                .font(.system(size: 15))
            
            Text(track?.artist.name ?? "Tap the play button")
                .font(.system(size: 12))
                .foregroundColor(.secondary)
        }
    }
    
    private func previewControlIcons() -> some View {
        return HStack(spacing: 20) {
            Button {
                nowPlaying.send(.playButtonTapped)
            } label: {
                Image(systemName: nowPlaying.state.isPlaying ? "pause.fill" : "play.fill")
            }
            .foregroundColor(.primary)
            
            Button {
                nowPlaying.send(.playNext)
            } label: {
                Image(systemName: "forward.fill")
            }
            .disabled(nowPlaying.isEmptyUpNext)
            .foregroundColor(nowPlaying.isEmptyUpNext ? Color.secondary : .primary)
            
            Button {
                nowPlaying.send(.togglePlayer)
            } label: {
                Image(systemName: "music.note.list")
            }
            .disabled(nowPlaying.isEmptyUpNext)
            .foregroundColor(nowPlaying.isEmptyUpNext ? Color.secondary : .primary)
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
