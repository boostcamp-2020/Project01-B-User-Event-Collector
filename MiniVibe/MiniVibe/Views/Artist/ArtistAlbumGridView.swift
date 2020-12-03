//
//  ArtistAlbumGridView.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/01.
//

import SwiftUI

struct ArtistAlbumGridView: View {
    init(title: String, categories: [String]) {
        self.title = title
        self.categories = categories
        UISegmentedControl.appearance().selectedSegmentTintColor = .clear
        UISegmentedControl.appearance().backgroundColor = .clear
        UISegmentedControl.appearance().setBackgroundImage(UIImage(),
                                                           for: .normal,
                                                           barMetrics: .default)
        UISegmentedControl.appearance()
            .setDividerImage(UIImage(),
                             forLeftSegmentState: .normal,
                             rightSegmentState: .normal,
                             barMetrics: .default)
        UISegmentedControl.appearance()
            .setTitleTextAttributes([.foregroundColor: UIColor.black,
                                     .font: UIFont.boldSystemFont(ofSize: 16)],
                                    for: .selected)
        UISegmentedControl.appearance()
            .setTitleTextAttributes([.foregroundColor: UIColor.systemGray,
                                     .font: UIFont.systemFont(ofSize: 16)],
                                    for: .normal)
    }
    
    private let categories: [String]
    let title: String
    @State private var selection = 0
    
    var body: some View {
        VStack(alignment: .leading) {
            Picker("앨범 종류", selection: $selection) {
                ForEach(0..<categories.count) {
                    Text(categories[$0])
                }
            }
            .pickerStyle(SegmentedPickerStyle())
            .frame(width: 50 * CGFloat(categories.count), height: 30)
            
            TabView(selection: $selection) {
                ForEach(0..<categories.count) { _ in
                    ThumbnailGrid()
                }
            }
            .tabViewStyle(PageTabViewStyle())
        }
        .animation(.easeInOut)
        .navigationTitle(title)
        .navigationBarTitleDisplayMode(.inline)
    }
}

struct ArtistAlbumGrid_Previews: PreviewProvider {
    static var previews: some View {
        NavigationView {
            ArtistAlbumGridView(title: "앨범", categories: ["전체", "정규", "비정규", "참여"])
        }
    }
}
