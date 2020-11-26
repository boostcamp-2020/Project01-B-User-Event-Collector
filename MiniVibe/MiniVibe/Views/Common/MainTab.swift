//
//  MainTab.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/11/26.
//

import SwiftUI

struct MainTab: View {
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
    }
}

struct MainTab_Previews: PreviewProvider {
    static var previews: some View {
        MainTab()
    }
}
