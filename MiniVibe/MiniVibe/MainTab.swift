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
    @EnvironmentObject private var nowPlaying: NowPlaying
    
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
                .tag(0)
            
            Chart()
                .tabItem {
                    Image(systemName: "chart.bar.fill")
                }
                .tag(1)
            
            Search()
                .tabItem {
                    Image(systemName: "magnifyingglass")
                }
                .tag(2)
            
            Library()
                .tabItem {
                    Image(systemName: "person.fill")
                }
                .tag(3)
        }
        .accentColor(.pink)
        .onPreferenceChange(Size.self, perform: { value in
            contentFrame = value.last ?? .zero
        })
        .overlay(
            PlayerPreview(coordinate: contentFrame,
                          title: nowPlaying.title,
                          artist: nowPlaying.artist)
                .onTapGesture {
                    nowPlaying.isPlayerOpen.toggle()
                }
                .sheet(isPresented: $nowPlaying.isPlayerOpen) {
                    PlayerView(title: nowPlaying.title,
                               artist: nowPlaying.artist)
                }
        )
    }
}

struct MainTab_Previews: PreviewProvider {
    static var previews: some View {
        MainTab()
            .environmentObject(NowPlaying())
    }
}

struct Size: PreferenceKey {
    typealias Value = [CGRect]
    static var defaultValue: [CGRect] = []
    static func reduce(value: inout [CGRect], nextValue: () -> [CGRect]) {
        value.append(contentsOf: nextValue())
    }
}
