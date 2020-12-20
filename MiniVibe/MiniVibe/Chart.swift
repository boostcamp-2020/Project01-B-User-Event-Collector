//
//  Chart.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/03.
//

import SwiftUI

struct Chart: View {
    @StateObject private var viewModel = ChartsViewModel()
    
    var body: some View {
        GeometryReader { geometry in
            let width = geometry.size.width
            NavigationView {
                ScrollView {
                    VStack(alignment: .leading, spacing: 20) {
                        Text("차트")
                            .font(.title)
                            .fontWeight(.heavy)
                            .foregroundColor(.primary)
                            .padding(width * .paddingRatio)
                        
                        ChartSectionB(width: width,
                                      title: "VIBE 노래방 TOP 100 🎤",
                                      tracks: viewModel.state.tracks1)
                        
                        ChartSectionB(width: width,
                                      title: "국내 급상승 🔥",
                                      tracks: viewModel.state.tracks2)
                        
                        ChartSectionB(width: width,
                                      title: "오늘 Top 100",
                                      tracks: viewModel.state.tracks3)
                        
                    }
                    .padding(.bottom, 70)
                }
                .navigationBarHidden(true)
            }
        }
        .onAppear {
            viewModel.send(.appear)
        }
    }
}

struct Chart_Previews: PreviewProvider {
    static var previews: some View {
        Chart()
    }
}
