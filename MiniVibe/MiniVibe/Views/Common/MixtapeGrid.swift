//
//  MixtapeGrid.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/11/25.
//

import SwiftUI

struct MixtapeGrid: View {
    let title: String
    
    var body: some View {
        ThumbnailGrid(title: title)
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

struct MixtapeGrid_Previews: PreviewProvider {
    static var previews: some View {
        NavigationView {
            MixtapeGrid(title: "나를 위한 믹스테잎")
        }
    }
}
