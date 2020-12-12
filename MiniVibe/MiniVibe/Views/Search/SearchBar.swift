//
//  SearchBar.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/03.
//

import SwiftUI

struct SearchBar: View {
    @EnvironmentObject var eventLogger: EventLogger
    @State private var isEditing = false
    @Binding var searchedText: String
    
    let width: CGFloat
    
    var body: some View {
        HStack {
            TextField("검색어를 입력해 주세요.", text: $searchedText, onCommit: {
                eventLogger.send(SearchLog(userId: 0,
                                           componentId: "searchBar",
                                           text: searchedText))
            })
            .padding(10)
            .background(Color(.systemGray6))
            .padding(10)
            .cornerRadius(8)
            .onTapGesture {
                isEditing = true
            }
            
            if isEditing {
                Button {
                    searchedText = ""
                    isEditing = false
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
            SearchBar(searchedText: .constant(""), width: geometry.size.width)
        }
    }
}
