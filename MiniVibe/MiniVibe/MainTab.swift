//
//  MainTab.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/11/26.
//

import SwiftUI

struct MainTab: View {
    @EnvironmentObject private var nowPlaying: NowPlaying
    @State private var contentFrame = CGRect.zero
    @StateObject private var viewModel = MainTabViewModel()
    
    init() {
        UITabBar.appearance().barTintColor = .systemBackground
        UITabBar.appearance().clipsToBounds = true
    }
    
    var body: some View {
        TabView(selection: $viewModel.tabViewSelection) {
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
            
            SearchView()
                .tabItem {
                    Image(systemName: "magnifyingglass")
                }
                .tag(ViewIdentifier.search)
            
            Library()
                .tabItem {
                    Image(systemName: "person.fill")
                }
                .tag(ViewIdentifier.library)
            
            EventLogView(viewModel: .init())
                .tabItem {
                    Image(systemName: "pencil.and.ellipsis.rectangle")
                }
                .tag(ViewIdentifier.none)
        }
        .foregroundColor(.accentColor)
        .onPreferenceChange(Size.self, perform: { value in
            contentFrame = value.last ?? .zero
        })
        .overlay(player)
    }
    
    @ViewBuilder
    private var player: some View {
        if viewModel.tabViewSelection != .none {
            PlayerPreview(coordinate: contentFrame)
                .onTapGesture {
                    if !nowPlaying.upNext.isEmpty {
                        nowPlaying.isPlayerPresented.toggle()
                    }
                }
                .sheet(isPresented: $nowPlaying.isPlayerPresented) {
                    PlayerView()
                        .logTransition(identifier: .player,
                                       componentId: ComponentId.playerPreview)
                }
        }
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
