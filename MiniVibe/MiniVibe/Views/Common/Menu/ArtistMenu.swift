//
//  ArtistMenu.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/01.
//

import SwiftUI

struct ArtistMenu: View {
    @Environment(\.presentationMode) var presentationMode
    let artist: ArtistInfo
    
    var body: some View {
        VStack(spacing: 36) {
            Spacer()
            HStack {
                AsyncImage(urlString: artist.imageUrl)
                    .aspectRatio(1, contentMode: .fit)
                    .frame(width: 80)
                    .clipShape(Circle())
                
                VStack(alignment: .leading,
                       spacing: 4) {
                    Text(artist.name)
                        .font(.system(size: 18, weight: .bold))
                    
                    Text("♥︎ 999")
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
        ArtistMenu(artist: .init(id: 0, name: "", imageUrl: "", genre: .init(name: ""), tracks: [], albums: []))
    }
}
