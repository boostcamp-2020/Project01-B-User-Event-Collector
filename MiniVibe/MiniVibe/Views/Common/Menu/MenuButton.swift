//
//  MenuButton.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/01.
//

import SwiftUI

struct MenuButton: View {
    enum MenuButtonType: Equatable {
        enum DownloadType: CustomStringConvertible {
            case music
            case album
            case playList
            
            var description: String {
                switch self {
                case .music:
                    return "곡"
                case .album:
                    return "앨범"
                case .playList:
                    return "플레이리스트"
                }
            }
        }
        
        case like(Int)
        case exclude
        case download(DownloadType)
        case addToPlaylist
        case share
        
        var imageName: String {
            switch self {
            case let .like(isLike):
                return isLike == 1 ? "heart.fill" : "heart"
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
                return isLike == 1 ? "좋아요 취소" : "좋아요"
            case .exclude:
                return "이 노래 제외"
            case let .download(type):
                return "\(type) 저장"
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
            HStack(spacing: 0) {
                Image(systemName: type.imageName)
                    .foregroundColor(type == .like(1) ? .pink : .black)
                    .font(.system(size: 24))
                    .frame(width: 24, height: 24)
                    .padding(.horizontal)
                
                Text(type.title)
                    .foregroundColor(.black)
            }
            .font(.system(size: 18))
            
            Spacer()
        }
    }
}

struct MenuButton_Previews: PreviewProvider {
    static var previews: some View {
        MenuButton(type: .like(1))
    }
}
