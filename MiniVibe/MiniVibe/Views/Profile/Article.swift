//
//  Article.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/04.
//

import SwiftUI
import KingfisherSwiftUI

struct Article: View {
    @Binding var isOpenArticle: Bool
    @State private var show: Bool = false
    let imageURL: String
    let title: String
    let subtitle: String
    let content: String
    
    var body: some View {
        VStack {
            HStack {
                Spacer()
                Button {
                    show = false
                    isOpenArticle = false
                } label: {
                    Image(systemName: "xmark")
                        .foregroundColor(.primary)
                        .font(.system(size: 17))
                }
                .padding(.vertical)
            }
            ScrollView {
                VStack(alignment: .leading, spacing: 24) {
                    KFImage(URL(string: imageURL))
                        .placeholder {
                            Image("placeholder")
                                .resizable()
                        }
                        .resizable()
                        .aspectRatio(1, contentMode: .fit)
                    
                    VStack(alignment: .leading, spacing: 4) {
                        Text(title)
                            .font(.system(size: 30, weight: .bold))
                            .foregroundColor(.primary)
                        
                        Text(subtitle)
                            .foregroundColor(.secondary)
                            .font(.system(size: 20))
                    }
                    
                    Text(content)
                        .foregroundColor(.secondary)
                        .font(.system(size: 16))
                }
            }
        }
        .padding(.horizontal)
        .padding(.bottom, 70)
        .opacity(show ? 1 : 0)
        .navigationBarHidden(true)
        .onAppear {
            withAnimation {
                show = true
            }
        }
    }
}

struct Article_Previews: PreviewProvider {
    static var previews: some View {
        Article(isOpenArticle: .constant(true),
                imageURL: "",
                title: "Dynamite",
                subtitle: "방탄소년단",
                content: ArticleExample.content
        )
        .previewInAllColorSchemes
    }
}

// swiftlint:disable line_length
enum ArticleExample {
    static let content =
        """
    방탄소년단, 디스코 팝 장르 디지털 싱글 <Dynamite> 발매
    "환하게 불을 밝힐 거야!" 전 세계를 향한 방탄소년단의 희망 메시지
    세련미·위트·중독성…멤버별 매력 극대화한 퍼포먼스

    그룹 방탄소년단이 8월 21일 디지털 싱글 <Dynamite>를 전 세계적으로 동시 발매한다.

    <Dynamite>는 밝고 경쾌한 분위기의 디스코 팝(Disco Pop) 장르로, 팬들을 위한 희망의 메시지를 담았다. 코로나19 사태가 야기한 무력감과 허탈감을 이겨낼 '돌파구'로서 방탄소년단은 데뷔 이래 처음으로 영어로 곡을 소화하는 새로운 도전에 나섰다.
    """
}
// swiftlint:enable line_length
