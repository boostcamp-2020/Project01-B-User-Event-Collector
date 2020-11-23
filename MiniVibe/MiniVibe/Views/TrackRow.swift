//
//  TrackRow.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/11/23.
//

import SwiftUI

struct TrackRow: View {
    var body: some View {
        HStack {
            Image("album")
                .resizable()
                .frame(width: 100, height: /*@START_MENU_TOKEN@*/100/*@END_MENU_TOKEN@*/)
            VStack(alignment: .leading) {
                Text("Dynamite")
                    .font(.title)
                Text("방탄소년단")
                    .font(.title2)
                    .foregroundColor(.secondary)
            }
            Spacer()
        }
        .padding(.vertical, 8)
    }
}

struct TrackRow_Previews: PreviewProvider {
    static var previews: some View {
        TrackRow()
    }
}
