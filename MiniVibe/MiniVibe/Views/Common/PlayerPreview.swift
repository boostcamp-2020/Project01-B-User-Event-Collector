//
//  PlayerPreview.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/11/26.
//

import SwiftUI

struct PlayerPreview: View {
    @State private var isPlaying = false
    
    var body: some View {
        HStack {
            Image("album")
                .resizable()
                .frame(width: 50)
            
            VStack(alignment: .leading) {
                Text("Love Poem")
                    .font(.system(size: 15))
                Text("아이유 (IU)")
                    .font(.system(size: 12))
                    .foregroundColor(.secondary)
            }
            Spacer()
            HStack(spacing: 10)  {
                Button {
                    isPlaying = !isPlaying
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
            .font(.system(size: 20))
            .foregroundColor(.black)
        }
        .frame(height: 50)
        .padding(EdgeInsets(top: 5, leading: 10, bottom: 5, trailing: 10))
        .background(Color.gray.opacity(0.15))
    }
}

struct PlayerPreview_Previews: PreviewProvider {
    static var previews: some View {
        PlayerPreview()
    }
}
