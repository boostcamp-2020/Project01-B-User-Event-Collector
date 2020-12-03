//
//  Article.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/04.
//

import SwiftUI

struct Article: View {
    @Environment(\.presentationMode) var presentationMode
    let title: String
    let subtitle: String
    
    var body: some View {
        VStack {
            HStack {
                Spacer()
                Button {
                    presentationMode.wrappedValue.dismiss()
                } label: {
                    Image(systemName: "xmark")
                        .foregroundColor(.black)
                        .font(.system(size: 24))
                }
                .padding(.vertical)
            }
            ScrollView {
                VStack(alignment: .leading, spacing: 24) {
                    Image("album")
                        .resizable()
                        .aspectRatio(1, contentMode: .fit)
                    VStack(alignment: .leading, spacing: 4) {
                        Text(title)
                            .font(.system(size: 30, weight: .bold))
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
    }
}

struct Article_Previews: PreviewProvider {
    static var previews: some View {
        Article(title: "Dynamite", subtitle: "방탄소년단")
    }
}

// swiftlint:disable line_length
private let content =
    """
방탄소년단, 디스코 팝 장르 디지털 싱글 <Dynamite> 발매
"환하게 불을 밝힐 거야!" 전 세계를 향한 방탄소년단의 희망 메시지
세련미·위트·중독성…멤버별 매력 극대화한 퍼포먼스

그룹 방탄소년단이 8월 21일 디지털 싱글 <Dynamite>를 전 세계적으로 동시 발매한다.

<Dynamite>는 밝고 경쾌한 분위기의 디스코 팝(Disco Pop) 장르로, 팬들을 위한 희망의 메시지를 담았다. 코로나19 사태가 야기한 무력감과 허탈감을 이겨낼 '돌파구'로서 방탄소년단은 데뷔 이래 처음으로 영어로 곡을 소화하는 새로운 도전에 나섰다.

올해 데뷔 7주년을 맞은 방탄소년단은 지난 2월 21일 발표한 정규 4집 <MAP OF THE SOUL : 7>에서 시련과 상처, 두려움 등 자신들의 진솔한 이야기를 노래로 표현했다. '보여주고 싶은 나'와 '외면하고 싶은 나'를 받아들이고 '온전한 나'를 찾은 방탄소년단이 <Dynamite>에 담은 메시지는 바로 '행복'과 '자신감'이다. 그리고 그 행복과 자신감은 지금 모두에게 필요한 '에너지'의 원천이다. Jonas Brothers의 <What A Man Gotta Do?>, Hailee Steinfeld의 <I Love You's>를 만든 뮤지션 데이비드 스튜어트(David Stewart), 제시카 아곰바르(Jessica Agombar)가 작사·작곡에 참여해 흥겹고 발랄한 디스코풍 음악을 완성했다.

<Dynamite>는 앨범을 낼 때마다 자신들의 이야기로 전 세계인으로부터 공감을 이끌어 내는 방탄소년단이 모두에게 선사하는 '힐링송'이다. 자신들이 가장 잘하고 좋아하는 일인 춤과 노래로 사람들을 즐겁게 하는 것, 모두를 행복하게 만드는 데에서 방탄소년단 스스로도 행복을 찾게 된다는, '선순환의 고리'를 엿볼 수 있다.

"Light it up"
바로 지금, 방탄소년단이 들려 주고 싶은 노래

중독성 강한 신나는 리듬에, 유쾌하면서 역동적인 퍼포먼스를 더한 <Dynamite>. 여기에 "힘든 상황이지만 각자 할 수 있는 것들을 하자. 춤과 노래를 통해 자유와 행복을 찾자"라는 메시지까지 담은, 또 하나의 방탄소년단만의 음악이 탄생했다.

가사는 소소한 일상의 순간순간을 통해 삶의 소중함과 인생의 특별함을 얘기한다. 그 무엇도 계획대로 되지 않고, 시간이 멈춰 버린 것만 같으며, 큰 소리로 웃어 본 게 언제인지 아득하고, 누군가의 힘찬 응원을 바라는, 마치 달리다가 넘어진 것 같은 기분을 느끼는 모든 이들에게 바치는 곡이다. 무겁지 않게 유쾌한 언어로 풀어 내, 듣는 사람들의 입가에 저절로 미소가 번진다.

"Life is Dynamite"
'대체 불가' 방탄소년단의 퍼포먼스

방탄소년단은 <MAP OF THE SOUL : 7>의 타이틀곡 <ON>을 통해 30여 명의 댄서, 마칭 밴드(marching band)와 대규모 퍼포먼스를 구현해 독보적인 존재감을 보여 주었다. <Dynamite>에서는 빛나는 존재감을 드러내는 카리스마와 더불어 위트도 장착했다.

안무는 곡의 분위기와 어울리는 세련되고 경쾌한 느낌을 준다. 멤버마다 고유의 멋과 개성을 보여 줄 수 있는 퍼포먼스로 매력을 극대화한 것이 포인트. 누구나 따라 할 수 있는, 중독성 강한 안무라는 점도 특징이다. 단순한 동작을 연결해, 멤버들이 노래에 집중하면서 각자 자신의 매력을 가감 없이 표현할 수 있도록 짜여졌다. 한 사람씩 주인공이 된 듯 스포트라이트가 맞춰지는 순간은 화려한 쇼 뮤지컬을 보는 듯 하다.

뮤직비디오는 멜로디와 가사의 흥겨운 분위기를 살린 활기찬 콘셉트로, 여유롭게 음악을 즐기는 방탄소년단을 그린다. 처음부터 끝까지 에너지 넘치는 분위기 속에 방탄소년단의 밝고 쾌활한 일상을 엿볼 수 있도록 연출됐다. 멤버별 경쾌한 퍼포먼스가 흐르고, 후반부에는 화려한 배경과 역동적인 군무가 펼쳐져 보는 즐거움이 배가된다.

발매사, 기획사 정보를 제공하는 표
발매사    Dreamus
기획사    빅히트엔터테인먼트
"""
// swiftlint:enable line_length
