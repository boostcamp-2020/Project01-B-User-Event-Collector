//
//  PreviewItem.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/11/24.
//

import SwiftUI
import KingfisherSwiftUI

struct PreviewItem: View {
    let upperTitle: String
    let imageUrl: String
    let title: String
    let subtitle: String
    
    var body: some View {
        VStack(alignment: .leading, spacing: 6) {
            Text(upperTitle)
                .font(.system(size: 12))
                .foregroundColor(.accentColor)
            
            KFImage(URL(string: imageUrl))
                .resizable()
            
            VStack(alignment: .leading, spacing: 3) {
                Text(title)
                    .font(.system(size: 17))
                    .foregroundColor(.primary)
                    .bold()
                
                Text(subtitle)
                    .font(.system(size: 12))
                    .foregroundColor(.secondary)
            }
        }
    }
}

struct PreviewItem_Previews: PreviewProvider {
    static var previews: some View {
        MockPreviewItem.item0
            .previewLayout(.fixed(width: 375, height: 250))
    }
}

struct MockPreviewItem {
    static let item0 = PreviewItem(upperTitle: "여왕의 귀환",
                                   imageUrl: "https://music-phinf.pstatic.net/20201207_49/1607303728781HTub7_JPEG/0-%B4%EB%C7%A5%C0%CC%B9%CC%C1%F6_1.jpg?type=w720",
                                   title: "머라이어캐리가 돌아왔다",
                                   subtitle: "크리스마스니깐")
    static let item1 = PreviewItem(upperTitle: "스테이션",
                                   imageUrl: "https://music-phinf.pstatic.net/20181204_2/1543918833159wpHlc_PNG/mood_4_Sad.png?type=f360",
                                   title: "아직..안 자요?",
                                   subtitle: "느낌별 스테이션 : 우울할 때")
    static let item2 = PreviewItem(upperTitle: "매거진",
                                   imageUrl: "https://music-phinf.pstatic.net/20201202_268/1606888566429Kw5B5_JPEG/0-%B4%EB%C7%A5-%C0%CC%B9%CC%C1%F611.jpg?type=w720",
                                   title: "따뜻한 감동을 주는 찰리브라운과 친구들",
                                   subtitle: "함께해요")
}
