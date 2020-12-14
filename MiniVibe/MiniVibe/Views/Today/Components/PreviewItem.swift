//
//  PreviewItem.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/11/24.
//

import SwiftUI

struct PreviewItem: View {
    var body: some View {
        VStack(alignment: .leading, spacing: 6) {
            Text("Happy Christmas")
                .font(.system(size: 12))
                .foregroundColor(.accentColor)
            
            Image("content")
                .resizable()
            
            VStack(alignment: .leading, spacing: 3) {
                Text("연인을 위한 캐롤")
                    .font(.system(size: 17))
                    .foregroundColor(.primary)
                    .bold()
                
                Text("너와 함께라면 하나도 춥지 않아")
                    .font(.system(size: 12))
                    .foregroundColor(.secondary)
            }
        }
    }
}

struct PreviewItem_Previews: PreviewProvider {
    static var previews: some View {
        PreviewItem()
            .previewLayout(.fixed(width: 375, height: 250))
    }
}
