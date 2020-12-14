//
//  Lyrics.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/01.
//

import SwiftUI
import KingfisherSwiftUI

struct Lyrics: View {
    enum Size: Int {
        case one = 1
        case two
        case three
        
        mutating func nextSize() {
            switch self {
            case .one: self = .two
            case .two: self = .three
            case .three: self = .one
            }
        }
    }
    
    @State private var textSize = Size.one
    @Binding var isOpenLyrics: Bool
    @EnvironmentObject private var nowPlaying: NowPlaying
    
    var body: some View {
        
        VStack {
            LyricsTrackInfo {
                isOpenLyrics = false
            }
            .padding(.top, 20)
            
            ZStack(alignment: .bottomTrailing) {
                ScrollView {
                    Text(nowPlaying.playingTrack?.track.lyrics ?? "")
                        .font(.system(size: CGFloat(15 * textSize.rawValue)))
                        .foregroundColor(.black)
                        .frame(maxWidth: .infinity, alignment: .leading)
                        .padding()
                }
                
                LyricsViewOption(textSize: $textSize)
            }
        }
        .background(BackgroundImage())
    }
    
}

struct BackgroundImage: View {
    @EnvironmentObject private var nowPlaying: NowPlaying
    var body: some View {
        KFImage(URL(string: nowPlaying.playingTrack?.track.album.imageUrl ?? ""))
            .placeholder {
                Image("placeholder")
                    .resizable()
            }
            .resizable()
            .scaledToFill()
            .overlay(Color.white.blur(radius: 300))
            .ignoresSafeArea(.container, edges: .bottom)
    }
}

struct LyricsTrackInfo: View {
    @EnvironmentObject private var nowPlaying: NowPlaying
    
    init(action: @escaping () -> Void) {
        self.action = action
    }
    
    private let action: () -> Void
    
    var body: some View {
        HStack(spacing: 10) {
            KFImage(URL(string: nowPlaying.playingTrack?.track.album.imageUrl ?? ""))
                .placeholder {
                    Image("placeholder")
                        .resizable()
                }
                .resizable()
                .scaledToFit()
            
            VStack(alignment: .leading) {
                Text(nowPlaying.playingTrack?.track.album.title ?? "Unknown")
                    .font(.title3)
                Text(nowPlaying.playingTrack?.track.artist.name ?? "Unknown")
                    .font(.subheadline)
                    .foregroundColor(.secondary)
            }
            
            Spacer()
            
            Button {
                action()
            } label: { Image(systemName: "xmark") }
            .foregroundColor(.primary)
        }
        .frame(height: 50)
        .padding(.horizontal, 20)
    }
}

struct LyricsViewOption: View {
    @Binding var textSize: Lyrics.Size
    
    var body: some View {
        VStack(spacing: 10) {
            Button {
                
            } label: { Image(systemName: "doc.text.magnifyingglass") }
            
            Button {
                textSize.nextSize()
            } label: { Image(systemName: "\(textSize.rawValue).circle.fill")}
        }
        .padding()
        .font(.system(size: 25))
        .foregroundColor(.black)
    }
}

struct Lyrics_Previews: PreviewProvider {
    static var previews: some View {
        //Lyrics(isOpenLyrics: .constant(false))
        LyricsViewOption(textSize: .constant(.one))
            .previewLayout(.fixed(width: 300, height: 80))
    }
}
