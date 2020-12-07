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
                .frame(width: 100, height: 100)
            
            VStack(alignment: .leading, spacing: 5) {
                VStack(alignment: .leading) {
                    Text(title)
                        .font(.system(size: 17))

//                    // 해당 정보 API에 없음. 추가하던지 날리던지 해야함
//                    Text(description)
//                        .font(.system(size: 13))
//                        .foregroundColor(.secondary)
                }
                
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
        ThumbnailRow(imageURL: "", title: "", subtitle: "")
            .previewLayout(.fixed(width: 375, height: 100))
    }
}
