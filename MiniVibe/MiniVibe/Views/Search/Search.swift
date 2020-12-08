//
//  Search.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/03.
//

import SwiftUI

struct Search: View {
    @EnvironmentObject var nowPlaying: NowPlaying
    @StateObject private var viewModel = SearchViewModel()
    @State private var searchedText = ""
    
    var body: some View {
        GeometryReader { geometry in
            let width = geometry.size.width
            NavigationView {
                VStack(alignment: .leading) {
                    NavigationLink(
                        destination: nowPlaying.destination?.view,
                        isActive: $nowPlaying.isNavigationActive) { }
                    
                    Text("검색")
                        .foregroundColor(.black)
                        .font(.title)
                        .fontWeight(.heavy)
                        .padding(geometry.size.width * .paddingRatio)
                    
                    SearchBar(searchedText: $searchedText, width: width)
                    
                    NewsSection(width: width,
                                newsList: viewModel.newsList)
                    
                    GenreSection()
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
        Search()
    }
}
