//
//  Lyrics.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/01.
//

import SwiftUI

struct Lyrics: View {
    
    enum Size: Int {
        case one = 1
        case two
        case three
        
        mutating func nextSize() {
            switch self {
            case .one: self = .two
            case .two: self = .three
            case .three: self = .one
            }
        }
    }
    
    @State private var textSize = Size.one
    @Binding var isOpenLyrics: Bool
    
    var body: some View {
        GeometryReader { geometry in
            VStack {
                LyricsTrackInfo {
                    isOpenLyrics = false
                }
                
                ZStack(alignment: .bottomTrailing) {
                    ScrollView {
                        Text(LyricsExample.cinderella)
                            .font(.system(size: CGFloat(15 * textSize.rawValue)))
                            .frame(maxWidth: .infinity, alignment: .leading)
                            .padding()
                    }
                    
                    LyricsViewOption(textSize: $textSize)
                }
               
                ZStack(alignment: .top) {
                    Rectangle()
                        .foregroundColor(Color.white.opacity(0.5))
                        .ignoresSafeArea(.all, edges: .bottom)
                    
                    VStack(spacing: 20) {
                        PlayerSlider(width: geometry.size.width, totalDuration: "", playbackTime: .constant(nil))
                            .frame(height: 3)
                        
                        HStack {
                            Button {
                                
                            } label: { Image(systemName: "music.mic") }
                            
                            Spacer()
                            
                            Button {
                                
                            } label: { Image(systemName: "backward.fill") }
                            
                            Spacer()
                            
                            Button {
                                
                            } label: { Image(systemName: "play.fill") }
                            
                            Spacer()
                            
                            Button {
                                
                            } label: { Image(systemName: "forward.fill") }
                            
                            Spacer()
                            
                            Button {
                                
                            } label: { Image(systemName: "ellipsis") }
                        }
                        .font(.system(size: 25))
                        .foregroundColor(.black)
                        .padding(.horizontal, 20)
                    }
                    
                }
                .frame(height: 60)
                
            }
            .background(BackgroundImage())
        }
    }
    
}

struct Lyrics_Previews: PreviewProvider {
    static var previews: some View {
        Lyrics(isOpenLyrics: .constant(false))
    }
}

struct BackgroundImage: View {
    var body: some View {
        Image("album")
            .resizable()
            .scaledToFill()
            .blur(radius: 20, opaque: true)
    }
}

struct LyricsTrackInfo: View {
    init(action: @escaping () -> Void) {
        self.action = action
    }
    
    private let action: () -> Void
    
    var body: some View {
        HStack(spacing: 10) {
            Image("album")
                .resizable()
                .scaledToFit()
            
            VStack(alignment: .leading) {
                Text("신데렐라")
                    .font(.title3)
                Text("서인영")
                    .font(.subheadline)
                    .foregroundColor(.secondary)
            }
            
            Spacer()
            
            Button {
                action()
            } label: { Image(systemName: "xmark") }
            .foregroundColor(.black)
        }
        .frame(height: 50)
        .padding(.horizontal, 20)
    }
}

struct LyricsViewOption: View {
    @Binding var textSize: Lyrics.Size
    
    var body: some View {
        VStack(spacing: 10) {
            Button {
                
            } label: { Image(systemName: "doc.text.magnifyingglass") }
            
            Button {
                textSize.nextSize()
            } label: { Image(systemName: "\(textSize.rawValue).circle.fill")}
        }
        .padding()
        .font(.system(size: 25))
        .foregroundColor(.black)
    }
    
}

struct LyricsExample {
    static let cinderella: String =
        """
    신데렐라의 Come Back 12시부터 Attack
    결국엔 나의 선택
    Don't Tell Me Baby Come Back

    나는 Cinderella

    Now's The Time Make It Right
    Let Me See damn Hands Up High
    I Got Class I'm Bad S 요즘엔 내가 대세

    밤이 올 때 까지는 난 참 얌전해
    12시 전까지는 난 안변해
    더 늦기 전에 집에 들여보내
    12시 지나면 나는 변해

    아무것도 넌 몰라 뭣도
    니눈에 보이는게 다가 아냐
    아무것도 넌 몰라 뭣도
    니눈에 보이는 난 내가 아냐

    나는 Cinderella 일낼라
    이때다 싶어 덤비지 마요 큰일나요
    12시가 지나면 내가 널
    어떻게 할지도 몰라 놔요 잡지마요

    종이 12번 울리고 눈이 풀리고
    넋이나간 녀석들은 침을 흘리고
    아주 웃기고 하하하하

    아무것도 넌 몰라 뭣도
    니눈에 보이는게 다가 아냐
    아무것도 넌 몰라 뭣도
    니눈에 보이는 난 내가 아냐
    """
}
