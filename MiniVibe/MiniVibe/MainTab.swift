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
    @EnvironmentObject private var eventLogger: EventLogger
    
    init() {
        UITabBar.appearance().barTintColor = .systemBackground
        UITabBar.appearance().clipsToBounds = true
    }
    
    var body: some View {
        TabView(selection: $eventLogger.tabViewSelection) {
            Today()
                .tabItem {
                    Image(systemName: "house.fill")
                }
                .tag(ViewIdentifier.today)
            
            Chart()
                .tabItem {
                    Image(systemName: "chart.bar.fill")
                }
                .tag(ViewIdentifier.charts)
            
            Search()
                .tabItem {
                    Image(systemName: "magnifyingglass")
                }
                .tag(ViewIdentifier.search)
            
            Library()
                .tabItem {
                    Image(systemName: "person.fill")
                }
                .tag(ViewIdentifier.library)
        }
        .accentColor(.pink)
        .onPreferenceChange(Size.self, perform: { value in
            contentFrame = value.last ?? .zero
        })
        .overlay(
            PlayerPreview(isPlayerPresented: $isPlayerPresented,
                          coordinate: contentFrame,
                          title: "Dynamite",
                          artist: "방탄소년단")
                .onTapGesture {
                    isPlayerPresented.toggle()
                }
                .sheet(isPresented: $isPlayerPresented) {
                    PlayerView(title: "Dynamite",
                               artist: "방탄소년단")
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
