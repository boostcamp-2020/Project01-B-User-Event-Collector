//
//  MixtapeList.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/11/25.
//

import SwiftUI

struct MixtapeList: View {
    var body: some View {
        GeometryReader { proxy in
            ScrollView {
                LazyVGrid(
                    columns: .init(repeating: .init(), count: 2)
                ) {
                    ForEach(0..<10) { _ in
                        PlayListItem()
                    }
                }
                .padding(.horizontal, proxy.size.width * 0.04)
                .padding(.vertical)
            }
            .navigationTitle("나를 위한 믹스테잎")
            .navigationBarTitleDisplayMode(.inline)
            .navigationBarItems(
                trailing: Button {
                    
                } label: {
                    Text("취향 설정")
                        .foregroundColor(.black)
                        .font(.system(size: 16))
                        .fontWeight(.regular)
                }
            )
        }
    }
}

struct MixtapeList_Previews: PreviewProvider {
    static var previews: some View {
        NavigationView {
            MixtapeList()
        }
    }
}
