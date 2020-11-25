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
            Text("인기 플레이리스트")
                .font(.system(size: 12))
                .foregroundColor(.pink)
            
            Image("content")
                .resizable()
            
            VStack(spacing: 3) {
                Text("오랜만에 흥 터지네")
                    .font(.system(size: 17))
                    .bold()
                
                Text("다들 들썩거릴 준비됐나요")
                    .font(.system(size: 12))
                    .foregroundColor(.secondary)
            }
        }
    }
}

struct PreviewItem_Previews: PreviewProvider {
    static var previews: some View {
        PreviewItem()
    }
}
