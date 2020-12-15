//
//  Search.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/03.
//

import SwiftUI

struct SearchView: View {
    @StateObject private var viewModel = SearchViewModel()
    @State private var searchedText = ""
    
    var body: some View {
        GeometryReader { geometry in
            let width = geometry.size.width
            NavigationView {
                ScrollView {
                    VStack(alignment: .leading) {
                        Text("검색")
                            .font(.title)
                            .fontWeight(.heavy)
                            .foregroundColor(.primary)
                            .padding(geometry.size.width * .paddingRatio)
                        
                        SearchBar(searchedText: $searchedText, width: width)
                        
                        NewsSection(width: width,
                                    newsList: viewModel.newsList)
                        
                        GenreSection()
                    }
                }
                .navigationBarHidden(true)
            }
        }
        .onAppear {
            viewModel.load()
        }
    }
    
}

struct Genre_Previews: PreviewProvider {
    static var previews: some View {
        SearchView()
    }
}
