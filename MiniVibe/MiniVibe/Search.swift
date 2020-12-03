//
//  Search.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/03.
//

import SwiftUI

struct Search: View {
    @State var searchedText = ""
    
    var body: some View {
        GeometryReader { geometry in
            VStack(alignment: .leading) {
                Text("검색")
                    .foregroundColor(.black)
                    .font(.title)
                    .fontWeight(.heavy)
                    .padding(geometry.size.width * .paddingRatio)
                
                SearchBar(searchedText: $searchedText, width: geometry.size.width)
                
                // News
                
                GenreSection()
            }
        }
    }

}

struct Genre_Previews: PreviewProvider {
    static var previews: some View {
        Search(searchedText: "")
    }
}
