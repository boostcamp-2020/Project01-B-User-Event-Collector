//
//  PlayerMenu.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/01.
//

import SwiftUI

struct PlayerMenu: View {
    @Environment(\.presentationMode) var presentationMode
    
    var body: some View {
        VStack(spacing: 36) {
            Spacer()
            Button {
                
            } label: {
                Image("playListThumbnail")
                    .resizable()
                    .aspectRatio(1, contentMode: .fit)
                    .frame(width: 80)
                VStack(alignment: .leading,
                       spacing: 4) {
                    Text("제목ddddddasdfasdfsdasfasfasdf")
                        .font(.system(size: 18, weight: .bold))
                    Text("가수")
                        .foregroundColor(.secondary)
                }
                .lineLimit(1)
                .padding(.horizontal, 8)
                Spacer()
                Image(systemName: "chevron.right")
                    .foregroundColor(.secondary)
            }
            .foregroundColor(.black)
            .padding(.horizontal)
            
            MenuButton(type: .like(true))
            MenuButton(type: .exclude)
            MenuButton(type: .download)
            MenuButton(type: .addToPlaylist)
            MenuButton(type: .share)
            
            VStack(spacing: 0) {
                Divider()
                Button {
                    presentationMode.wrappedValue.dismiss()
                } label: {
                    Spacer()
                    Text("닫기")
                        .foregroundColor(.secondary)
                        .font(.system(size: 18))
                    Spacer()
                }
                .padding(.vertical)
            }
        }
    }
}

struct PlayerMenu_Previews: PreviewProvider {
    static var previews: some View {
        PlayerMenu()
    }
}
