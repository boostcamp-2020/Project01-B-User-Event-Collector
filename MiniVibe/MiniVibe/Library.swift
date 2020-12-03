//
//  Library.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/03.
//

import SwiftUI

struct Library: View {
    
    init() {
        let segmentAppearance = UISegmentedControl.appearance()
        segmentAppearance.backgroundColor = .clear
        segmentAppearance.setBackgroundImage(UIImage(), for: .normal, barMetrics: .default)
        segmentAppearance.setDividerImage(UIImage(),
                                          forLeftSegmentState: .normal,
                                          rightSegmentState: .normal,
                                          barMetrics: .default)
        segmentAppearance.setTitleTextAttributes([.foregroundColor: UIColor.systemPink,
                                                  .font: UIFont.boldSystemFont(ofSize: 20)],
                                                 for: .selected)
        segmentAppearance.setTitleTextAttributes([.foregroundColor: UIColor.systemGray,
                                                  .font: UIFont.systemFont(ofSize: 20)],
                                                 for: .normal)
    }
    
    private let categories = ["Songs", "Artists", "Albums", "Playlists"]
    @State private var selection = 0
    
    var body: some View {
        GeometryReader { geometry in
            VStack(alignment: .leading) {
                Text("보관함")
                    .foregroundColor(.black)
                    .font(.title)
                    .fontWeight(.heavy)
                    .padding(geometry.size.width * .paddingRatio)
                Picker("Library", selection: $selection) {
                    ForEach(0..<categories.count) {
                        Text(categories[$0])
                    }
                }
                .pickerStyle(SegmentedPickerStyle())
                .frame(height: 50)
                Divider()
                TabView(selection: $selection) {
                    LibrarySongsView().tag(0)
                    LibrarySongsView().tag(1) // ArtistsView
                    LibraryAlbumsView().tag(2)
                    LibraryAlbumsView().tag(3) // PlaylistsView
                }
                .tabViewStyle(PageTabViewStyle())
            }
            .animation(.easeInOut)
        }
    }
}

struct Library_Previews: PreviewProvider {
    static var previews: some View {
        Library()
    }
}
