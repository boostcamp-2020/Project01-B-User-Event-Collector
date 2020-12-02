//
//  ArtistMenu.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/01.
//

import SwiftUI

struct ArtistMenu: View {
    @Environment(\.presentationMode) var presentationMode
    
    var body: some View {
        VStack(spacing: 36) {
            Spacer()
            Button {
                // artist 화면에서 가수메뉴를 띄웠을 경우 그대로 창이 닫힘
                    // 혹시 artist menu가 다른 곳에서 선택된다면 고쳐야 함
                presentationMode.wrappedValue.dismiss()
            } label: {
                Image("artist")
                    .resizable()
                    .aspectRatio(1, contentMode: .fit)
                    .frame(width: 80)
                    .clipShape(Circle())
                
                VStack(alignment: .leading,
                       spacing: 4) {
                    Text("임창정")
                        .font(.system(size: 18, weight: .bold))
                    
                    Text("♥︎ 16K")
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
            MenuButton(type: .share)
            MenuCloseButton {
                presentationMode.wrappedValue.dismiss()
            }
        }
    }
}

struct ArtistMenu_Previews: PreviewProvider {
    static var previews: some View {
        ArtistMenu()
    }
}
