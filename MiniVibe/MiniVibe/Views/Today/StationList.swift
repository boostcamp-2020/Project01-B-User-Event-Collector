//
//  StationList.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/11/25.
//

import SwiftUI

struct StationList: View {
    var body: some View {
        GeometryReader { geometry in
            ScrollView {
                VStack(alignment: .leading) {
                    Section(
                        header: Text("최근 들은 스테이션")
                            .bold()
                            .padding(.top, 8)
                            .padding(.horizontal, geometry.size.width * .paddingRatio),
                        footer: Spacer().frame(height: 50)
                    ) {
                        StationStack(width: geometry.size.width)
                    }
                    
                    ForEach(0..<3) { _ in
                        Section(
                            header: Text("느낌별 스테이션").bold(),
                            footer: Spacer().frame(height: 50)
                        ) {
                            LazyVGrid(
                                columns: .init(
                                    repeating: .init(.fixed(geometry.size.width * .thumbnailRatio)),
                                    count: 2
                                )
                            ) {
                                ForEach(0..<10) { _ in
                                    StationItem()
                                }
                            }
                        }
                    }
                    .padding(.horizontal, geometry.size.width * .paddingRatio)
                }
                .padding(.bottom, 20)
                .navigationTitle("스테이션")
                .navigationBarTitleDisplayMode(.inline)
            }
        }
    }
}

struct StationList_Previews: PreviewProvider {
    static var previews: some View {
        NavigationView {
            StationList()
        }
    }
}
