//
//  MenuAlbumImage.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/13.
//

import SwiftUI
import KingfisherSwiftUI

struct MenuAlbumImage: View {
    let imageUrl: String
    
    var body: some View {
        KFImage(URL(string: imageUrl))
            .resizable()
            .aspectRatio(1, contentMode: .fit)
            .frame(width: 80)
    }
}
