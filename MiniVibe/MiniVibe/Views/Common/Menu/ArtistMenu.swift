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
            HStack {
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
