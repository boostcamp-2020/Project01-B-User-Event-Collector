//
//  PlayListSection.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/11/24.
//

import SwiftUI

struct PlayListSection<Dest: View>: View {
    let width: CGFloat
    let destination: Dest
    let title: String
    
    var body: some View {
        VStack(spacing: 8) {
            SectionTitle(width: width, destination: destination, title: title)
            ScrollView(.horizontal, showsIndicators: false) {
                HStack(spacing: width * 0.02) {
                    ForEach(0..<10) { _ in
                        PlayListItem()
                            .frame(width: width * 0.45)
                    }
                }
                .padding(.horizontal, width * 0.02)
            }
        }
    }
}

struct PlayListStack_Previews: PreviewProvider {
    static var previews: some View {
        PlayListSection(width: 200, destination: Text("플레이리스트 목록"), title: "플레이리스트")
    }
}
