//
//  SearchBar.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/03.
//

import SwiftUI

struct SearchBar: View {
    @ObservedObject var viewModel: SearchViewModel
    let width: CGFloat
    
    var body: some View {
        HStack {
            TextField("검색어를 입력해 주세요.", text: $viewModel.state.searchedText, onCommit: {
                viewModel.send(.search)
            })
            .padding(10)
            .background(Color(.systemGray6))
            .padding(10)
            .cornerRadius(8)
            .onTapGesture {
                viewModel.send(.searchBarTapped)
            }
            
            if viewModel.state.isEditing {
                Button {
                    viewModel.send(.cancelSearch)
                    dismissKeyboard()
                } label: { Text("취소") }
                .padding(.trailing, 10)
                .foregroundColor(.primary)
                .transition(.move(edge: .trailing))
                .animation(.easeInOut(duration: 0.2))
            }
        }
    }
}

struct SearchBar_Previews: PreviewProvider {
    static var previews: some View {
        GeometryReader { geometry in
            SearchBar(viewModel: .init(useCase: SearchUseCase(),
                                       eventLogger: MiniVibeApp.eventLogger), width: geometry.size.width)
        }
    }
}
