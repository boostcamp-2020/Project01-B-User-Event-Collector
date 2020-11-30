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
                .frame(width: 60, height: 60)
                .border(Color.gray, width: 0.7)
                .padding(.horizontal, 4)
            
            VStack(spacing: 3) {
                Text("1")
                    .font(.title3)
                Text("🔺")
                    .font(.subheadline)
            }
            .padding(.horizontal, 4)
            
            VStack(alignment: .leading, spacing: 4) {
                Text("Dynamite")
                    .font(.title3)
                Text("방탄소년단")
                    .font(.subheadline)
                    .foregroundColor(.secondary)
            }
            
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

struct TrackRow_Previews: PreviewProvider {
    static var previews: some View {
        TrackRow()
            .previewLayout(.fixed(width: 375, height: 80))
    }
}
