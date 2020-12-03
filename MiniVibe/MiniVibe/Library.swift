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
                                                  .font: UIFont.boldSystemFont(ofSize: 18)],
                                                 for: .selected)
        segmentAppearance.setTitleTextAttributes([.foregroundColor: UIColor.systemGray,
                                                  .font: UIFont.systemFont(ofSize: 18)],
                                                 for: .normal)
    }
    
    private let categories = ["노래", "앨범", "플레이리스트", "아티스트"]
    @State private var selection = 0
    
    var body: some View {
        GeometryReader { geometry in
            NavigationView {
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
                            .animation(nil)
                        LibraryAlbumsView().tag(1)
                        LibraryPlayListView().tag(2)
                        LibraryArtistsView().tag(3)
                            .animation(nil)
                    }
                    .tabViewStyle(PageTabViewStyle())
                }
                .navigationBarHidden(true)
                .animation(.easeInOut)
            }
        }
    }
}

struct Library_Previews: PreviewProvider {
    static var previews: some View {
        Library()
    }
}
