//
//  ThumbnailRow.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/11/25.
//

import SwiftUI

struct ThumbnailRow: View {
    var body: some View {
        HStack(spacing: 15) {
            Image("playListThumbnail")
                .resizable()
                .frame(width: 100, height: 100)
            
            VStack(alignment: .leading, spacing: 5) {
                VStack(alignment: .leading) {
                    Text("아시아 아티스트 어워즈 2020")
                        .font(.system(size: 17))
                    
                    Text("일할 때, 공부할 때 꼭 음악을 들어야 집중이 잘 된다면 이 플레이리스트를 추천할게요!")
                        .font(.system(size: 13))
                        .foregroundColor(.secondary)
                }
                
                Text("아시아 아티스트 어워즈 2020")
                    .font(.system(size: 13))
                    .foregroundColor(.secondary)
            }
            .lineLimit(1)
        }
    }
}

struct ThumbnailRow_Previews: PreviewProvider {
    static var previews: some View {
        ThumbnailRow()
            .previewLayout(.fixed(width: 375, height: 100))
    }
}
