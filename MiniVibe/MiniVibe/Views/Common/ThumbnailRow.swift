//
//  ThumbnailRow.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/11/25.
//

import SwiftUI

struct ThumbnailRow: View {
    let imageURL: String
    let title: String
    let subtitle: String
    
    var body: some View {
        HStack(spacing: 15) {
            AsyncImage(urlString: imageURL)
                .frame(width: 80, height: 80)
            
            VStack(alignment: .leading, spacing: 5) {
                Text(title)
                    .font(.system(size: 17))
                
                Text(subtitle)
                    .font(.system(size: 13))
                    .foregroundColor(.secondary)
            }
            .lineLimit(1)
            
            Spacer()
        }
    }
}


struct ThumbnailRow_Previews: PreviewProvider {
    static var previews: some View {
        ThumbnailRow(imageURL: "", title: "나만 없어 그 한정판 LP 레코드", subtitle: "2020-12-12")
            .previewLayout(.fixed(width: 375, height: 100))
    }
}
