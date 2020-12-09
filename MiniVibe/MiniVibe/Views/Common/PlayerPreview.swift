//
//  PlayerPreview.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/11/26.
//

import SwiftUI

struct PlayerPreview: View {
    @EnvironmentObject private var nowPlaying: NowPlaying
    let coordinate: CGRect
    let title: String // 얘네도 실제로 값 받기 시작하면
    let artist: String // 바뀌겠지
    private let height: CGFloat = 50
    private let edgeInset = EdgeInsets(top: 5, leading: 10, bottom: 5, trailing: 10)
    
    var body: some View {
        VStack {
            HStack {
                playingTrackInfo()
                
                Spacer()
                    
                previewControlIcons()
                //controlIcons
                    .font(.system(size: 20))
                    //.foregroundColor(.black)
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
        
//        var imageUrl = "placeholder"
//        var title = "What's on today?"
//        var artist = "Tap the play button"
//
//        if !nowPlaying.upNext.isEmpty {
//            let firstTrack = nowPlaying.upNext[0]
//            imageUrl = firstTrack.album.imageUrl
//            title = firstTrack.title
//            artist = firstTrack.artist.name
//        }
        
       
        
            AsyncImage(urlString: nowPlaying.upNext.first?.album.imageUrl ?? "")
                .frame(width: height, height: height)
            
            VStack(alignment: .leading) {
                Text(nowPlaying.upNext.first?.title ?? "What's on today?")
                    .font(.system(size: 15))
                
                Text(nowPlaying.upNext.first?.artist.name ?? "Tap the play button")
                    .font(.system(size: 12))
                    .foregroundColor(.secondary)
            }
        
        
    }

    private func previewControlIcons() -> some View {
        var emptyUpNext: Bool = nowPlaying.upNext.isEmpty
        var iconColor: Color = emptyUpNext ? Color.secondary : Color.black
            
        return HStack(spacing: 20) {
            Button {
                nowPlaying.isPlaying.toggle()
            } label: {
                nowPlaying.isPlaying ? Image(systemName: "pause.fill") : Image(systemName: "play.fill")
            }
            .foregroundColor(.black)
            
            Button {
                
            } label: {
                Image(systemName: "forward.fill")
            }
            .disabled(emptyUpNext)
            .foregroundColor(iconColor)
            
            Button {
                
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
            PlayerPreview(coordinate: geometry.frame(in: .global),
                          title: "Dynamite",
                          artist: "방탄소년단")
        }
    }
}
