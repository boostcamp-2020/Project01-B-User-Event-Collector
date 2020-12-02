//
//  MainTab.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/11/26.
//

import SwiftUI

struct MainTab: View {
    @State private var contentFrame = CGRect.zero
    @State private var isPlayerPresented = false
    
    init() {
        UITabBar.appearance().barTintColor = .systemBackground
        UITabBar.appearance().clipsToBounds = true
    }
    
    var body: some View {
        TabView {
            Today()
                .tabItem {
                    Image(systemName: "house.fill")
                }
            
            Text("차트")
                .tabItem {
                    Image(systemName: "chart.bar.fill")
                }
            
            Text("검색")
                .tabItem {
                    Image(systemName: "magnifyingglass")
                }
            
            Text("보관함")
                .tabItem {
                    Image(systemName: "person.fill")
                }
        }
        .accentColor(.pink)
        .onPreferenceChange(Size.self, perform: { value in
            contentFrame = value.last ?? .zero
        })
        .overlay(
            PlayerPreview(coordinate: contentFrame)
                .onTapGesture {
                    isPlayerPresented.toggle()
                }
                .sheet(isPresented: $isPlayerPresented) {
                    PlayerView()
                }
        )
    }
}

struct MainTab_Previews: PreviewProvider {
    static var previews: some View {
        MainTab()
    }
}

struct Size: PreferenceKey {
    typealias Value = [CGRect]
    static var defaultValue: [CGRect] = []
    static func reduce(value: inout [CGRect], nextValue: () -> [CGRect]) {
        value.append(contentsOf: nextValue())
    }
}
