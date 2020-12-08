//
//  PlayerPreview.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/11/26.
//

import SwiftUI

struct PlayerPreview: View {
    @State private var isPlaying = false
    
    let coordinate: CGRect
    let title: String
    let artist: String
    private let height: CGFloat = 50
    private let edgeInset = EdgeInsets(top: 5, leading: 10, bottom: 5, trailing: 10)
    
    var body: some View {
        VStack {
            HStack {
                albumInfo
                
                Spacer()
                
                controlIcons
                    .font(.system(size: 20))
                    .foregroundColor(.black)
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
    
    @ViewBuilder
    var albumInfo: some View {
        Image("album")
            .resizable()
            .aspectRatio(1, contentMode: .fit)
            .frame(height: height)
        
        VStack(alignment: .leading) {
            Text(title)
                .font(.system(size: 15))
            
            Text(artist)
                .font(.system(size: 12))
                .foregroundColor(.secondary)
        }
    }
    
    var controlIcons: some View {
        HStack(spacing: 20) {
            Button {
                isPlaying.toggle()
            } label: {
                isPlaying ? Image(systemName: "pause.fill") : Image(systemName: "play.fill")
            }
            
            Button {
                
            } label: {
                Image(systemName: "forward.fill")
            }
            
            Button {
                
            } label: {
                Image(systemName: "music.note.list")
            }
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
