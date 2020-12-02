//
//  TrackRowD.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/02.
//

import SwiftUI

struct TrackRowD: View {
    let title: String
    let artist: String

    var body: some View {
        HStack {
            HStack {
                Text("1")
                    .font(.title3)
                    .padding(.horizontal, 4)
                
                Text(title)
                    .font(.title3)
            }
            .padding()
            
            Spacer()
            
            Button {
                
            } label: {
                Image(systemName: "ellipsis")
                    .foregroundColor(.black)
            }
            .padding()
        }
        .padding(.vertical, 8)
    }
}

struct TrackRowD_Previews: PreviewProvider {
    static var previews: some View {
        TrackRowD(title: "작은 방 (Feat.아이유)", artist: "스윗소로우")
            .previewLayout(.fixed(width: 375, height: 80))
    }
}
