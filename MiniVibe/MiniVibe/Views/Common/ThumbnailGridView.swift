//
//  ThumbnailGridView.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/11/25.
//

import SwiftUI

struct ThumbnailGridView: View {
    let title: String
    
    var body: some View {
        ThumbnailGrid()
            .navigationTitle(title)
            .navigationBarTitleDisplayMode(.inline)
    }
}

struct ThumbnailGridView_Previews: PreviewProvider {
    static var previews: some View {
        NavigationView {
            ThumbnailGridView(title: "좋아할 최신 앨범")
        }
    }
}
