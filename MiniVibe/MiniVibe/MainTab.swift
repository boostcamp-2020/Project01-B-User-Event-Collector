//
//  MainTab.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/11/26.
//

import SwiftUI

struct MainTab: View {
    @EnvironmentObject private var nowPlaying: NowPlayingViewModel
    @State private var contentFrame = CGRect.zero
    @StateObject private var viewModel = MainTabViewModel()
    
    init() {
        UITabBar.appearance().barTintColor = .systemBackground
        UITabBar.appearance().clipsToBounds = true
    }
    
    var body: some View {
        TabView(selection: $viewModel.state.tabViewSelection) {
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
            
            EventLogView(viewModel:
                            .init(localStorage: MiniVibeApp.eventLogger.local as? LocalEventStorage)
            )
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
        if viewModel.state.tabViewSelection != .none {
            PlayerPreview(coordinate: contentFrame)
                .onTapGesture {
                    nowPlaying.send(.togglePlayer)
                }
                .sheet(isPresented: $nowPlaying.state.isPlayerPresented) {
                    PlayerView()
                        .environmentObject(nowPlaying)
                        .logTransition(identifier: .player,
                                       componentId: ComponentId.playerPreview)
                        .environmentObject(nowPlaying)
                }
                .environmentObject(nowPlaying)
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
