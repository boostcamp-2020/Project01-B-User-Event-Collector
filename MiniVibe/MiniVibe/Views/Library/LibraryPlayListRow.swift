//
//  LibraryPlayListRow.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/03.
//

import SwiftUI

struct LibraryPlayListRow: View {
    let title: String
    
    var body: some View {
        HStack(spacing: 24) {
            Image("album")
                .resizable()
                .aspectRatio(1, contentMode: .fit)
                .frame(width: 80)
                .overlay(
                    Rectangle()
                        .stroke(Color.secondary, lineWidth: 0.5)
                )
            
            VStack(alignment: .leading) {
                Text(title)
                    .foregroundColor(.primary)
                    .font(.system(size: 17))
                
                Text("10곡")
                    .foregroundColor(.secondary)
                    .font(.system(size: 14))
            }
            
            Spacer()
        }
    }
}

struct LibraryPlayListRow_Previews: PreviewProvider {
    static var previews: some View {
        LibraryPlayListRow(title: "플레이리스트 이름")
    }
}
