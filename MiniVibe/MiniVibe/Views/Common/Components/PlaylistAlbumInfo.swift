//
//  PlaylistAlbumInfo.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/01.
//

import SwiftUI

struct PlaylistAlbumInfo: View {
    let title: String
    let subtitle: String
    
    var body: some View {
        VStack {
            EssentialAlbumInfo(title: title, subtitle: subtitle)
            OptionalAlbumInfo()
                .padding(.horizontal, 10)
        }
    }
}

struct EssentialAlbumInfo: View {
    let title: String
    let subtitle: String
    
    var body: some View {
        HStack(alignment: .top) {
            Button {
                // TO DO:
                // 앨범 관련 글 열기
            } label: {
                Image("album")
                    .resizable()
                    .aspectRatio(1, contentMode: .fit)
            }
            
            VStack(alignment: .leading) {
                Text("\(title)")
                    .font(.system(size: 18, weight: .bold))
                Text("\(subtitle)")
                    .font(.system(size: 16))
                    .foregroundColor(.secondary)
                Spacer()
                Button {
                    // TO DO: 앨범 전체 곡 다운로드
                } label: {
                    Image(systemName: "arrow.down.to.line")
                        .foregroundColor(.black)
                        .font(.system(size: 25, weight: .light))
                }
            }
            .padding(.vertical, 4)
            
            Spacer()
        }
        .frame(height: 130)
    }
}

struct OptionalAlbumInfo: View {
    var body: some View {
        VStack(alignment: .leading) {
            Text("2020.8.21 • 댄스 • 6곡")
            
            HStack {
                Text(AlbumInfoExample.text)
                    .lineLimit(1)
                Text("더보기")
            }
            .onTapGesture {
                // TO DO:
                // 앨범 정보 더보기
            }
            .foregroundColor(.secondary)
        }
        .font(.system(size: 14))
    }
}

struct PlaylistAlbumInfo_Previews: PreviewProvider {
    static var previews: some View {
        PlaylistAlbumInfo(title: "여긴 앨범이고", subtitle: "여긴 가수")
    }
}

struct AlbumInfoExample {
    static let text = """
    장범준 2집은 가사보다는 멜로디나 반주의 여러 가지 실험에 관심이 많았습니다.
    이번 3집은 좀더 작사 작곡에 균형을 맞추며 제 노래를 찾아주시는 분들이
    어떤 점을 기대하시고 좋아하실까 고민을 많이 했습니다. 그리고 최대한 현재에서 써보려고 노력했습니다.
    옛날 이야기를 하더라도 현재시점에서 바라보는 느낌으로 곡을 완성시키게 되었습니다.
    팬분들과 함께 나이를 먹어가는 느낌으로 노래를 들어보시면
    그것 또한 공감이 되고 재미있는 감동이 아닐까 싶습니다.

    1.당신과는 천천히
    사랑하는 존재에게 회복 받고 살아가는 사람들의 모습을 그렸습니다.

    2.일산으로
    제가 일산으로 가면 느끼는 감정을 담았습니다.

    3.노래방에서
    느끼실지 모르겠지만 기존의 제 느낌과는 다른 좀더 반주를 펼치고 가사를 서술형으로 써봤습니다.
    
    4.그모습 그대로
    아내가 예쁜데 더 예뻐지고 싶어하는거 같아서 쓰게 되었습니다.

    5.엄마 용돈 좀 보내주세요
    20대때 마음속으로 한 2년 휴학하고 음악을 해보자 결심했었습니다.
    혹시나 나중에 안되더라도 집이 좀 못살아서 알바를 하느라 좀더 열심히 못했다
    이런 핑계를 대기 싫어서 엄마에게 월세나 용돈을 부탁했던 모습을 담았습니다.

    6.이밤
    저희 딸이 좋아하는 노래입니다.
    결혼을 하고 싶어 꿈을 포기해도 된다는 남자를 바라보는 여자의 심정을 담았습니다.

    7.왜
    갑자기 이런 꿈을 꿔서 만들었습니다.

    8.상상속에서
    음악 작업 하다가 갑자기 슬퍼서 만들었습니다.
    """
}

