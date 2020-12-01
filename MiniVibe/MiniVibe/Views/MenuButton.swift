//
//  MenuButton.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/01.
//

import SwiftUI

struct MenuButton: View {
    enum MenuButtonType: Equatable {
        case like(Bool)
        case exclude
        case download
        case addToPlaylist
        case share
        
        var imageName: String {
            switch self {
            case let .like(isLike):
                return isLike ? "heart.fill" : "heart"
            case .exclude:
                return "smiley"
            case .download:
                return "arrow.down.to.line"
            case .addToPlaylist:
                return "music.note.list"
            case .share:
                return "square.and.arrow.up"
            }
        }
        
        var title: String {
            switch self {
            case let .like(isLike):
                return isLike ? "좋아요 취소" : "좋아요"
            case .exclude:
                return "이 노래 제외"
            case .download:
                return "곡 저장"
            case .addToPlaylist:
                return "내 플레이리스트에 추가"
            case .share:
                return "공유"
            }
        }
    }
    
    let type: MenuButtonType
    
    var body: some View {
        Button {
            
        } label: {
            HStack {
                Image(systemName: type.imageName)
                    .foregroundColor(type == .like(true) ? .pink : .black)
                    .frame(width: 24, height: 24)
                
                Text(type.title)
                    .foregroundColor(.black)
            }
            .font(.system(size: 18))
            
            Spacer()
        }
        .padding(.horizontal)
    }
}

struct MenuButton_Previews: PreviewProvider {
    static var previews: some View {
        MenuButton(type: .like(true))
    }
}
