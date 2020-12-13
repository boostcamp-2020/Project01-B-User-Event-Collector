//
//  TrackRowImage.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/13.
//

import SwiftUI
import KingfisherSwiftUI

struct TrackRowImage: View {
    let imageUrl: String
    
    var body: some View {
        KFImage(URL(string: imageUrl))
            .resizable()
            .frame(width: 50, height: 50)
            .border(Color.gray, width: 0.7)
    }
}

struct TrackRowMenu: View {
    var body: some View {
        Image(systemName: "ellipsis")
            .foregroundColor(.primary)
            .padding()
    }
}
