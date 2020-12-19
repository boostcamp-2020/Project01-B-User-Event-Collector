//
//  EventLogView.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/10.
//

import SwiftUI

struct EventLogView: View {
    init(viewModel: EventLogViewModel) {
        self._viewModel = StateObject(wrappedValue: viewModel)
        let segmentAppearance = UISegmentedControl.appearance()
        segmentAppearance.backgroundColor = .clear
        segmentAppearance.setBackgroundImage(UIImage(), for: .normal, barMetrics: .default)
        segmentAppearance.setDividerImage(UIImage(),
                                          forLeftSegmentState: .normal,
                                          rightSegmentState: .normal,
                                          barMetrics: .default)
        segmentAppearance.setTitleTextAttributes([.foregroundColor: UIColor.systemPink,
                                                  .font: UIFont.boldSystemFont(ofSize: 14)],
                                                 for: .selected)
        segmentAppearance.setTitleTextAttributes([.foregroundColor: UIColor.systemGray,
                                                  .font: UIFont.systemFont(ofSize: 14)],
                                                 for: .normal)
    }
    
    @StateObject private var viewModel: EventLogViewModel
    
    var body: some View {
        NavigationView {
            VStack {
                Picker("StorageCategory", selection: $viewModel.state.selection) {
                    ForEach(0..<viewModel.state.category.count) {
                        Text(viewModel.state.category[$0])
                    }
                }
                .pickerStyle(SegmentedPickerStyle())
                .frame(height: 50)
                
                Divider()
                
                TabView(selection: $viewModel.state.selection) {
                    eventList(events: viewModel.state.local).tag(0)
                    eventList(events: viewModel.state.commonEvents).tag(1)
                    eventList(events: viewModel.state.playEvents).tag(2)
                }
                .tabViewStyle(PageTabViewStyle())
                .animation(.easeInOut)
            }
            .listStyle(PlainListStyle())
            .navigationTitle("Event Log")
            .navigationBarTitleDisplayMode(.inline)
        }
        .onAppear {
            viewModel.send(input: .appear)
        }
    }
    
    private func eventList(events: [CustomStringConvertible]) -> some View {
        List(events, id: \.description) { event in
            Text(event.description)
                .foregroundColor(.primary)
        }
    }
}
