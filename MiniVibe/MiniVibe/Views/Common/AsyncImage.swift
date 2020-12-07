//
//  AsyncImage.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/07.
//

import SwiftUI

struct AsyncImage: View {
    init(urlString: String) {
        _loader = StateObject(wrappedValue: ImageLoader(cache: Environment(\.imageCache).wrappedValue,
                                                        urlString: urlString))
    }
    
    @StateObject private var loader: ImageLoader
    
    var body: some View {
        content
            .onAppear(perform: loader.load)
    }
    
    @ViewBuilder
    private var content: some View {
        if let image = loader.image {
            Image(uiImage: image)
                .resizable()
        } else {
            Image("placeholder")
                .resizable()
        }
    }
}

struct AsyncImage_Previews: PreviewProvider {
    static var previews: some View {
        AsyncImage(urlString: "abc")
    }
}
