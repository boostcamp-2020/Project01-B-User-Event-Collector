//
//  EventLogView.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/10.
//

import SwiftUI

struct EventLogView: View {
    @ObservedObject var viewModel: EventLogViewModel
    
    var body: some View {
        NavigationView {
            content
                .listStyle(PlainListStyle())
                .navigationTitle("Event Log")
                .navigationBarTitleDisplayMode(.inline)
                .navigationBarItems(trailing: resetButton)
        }
    }
    
    @ViewBuilder
    private var content: some View {
        switch viewModel.state {
        case .idle:
            Color.clear
                .onAppear {
                    viewModel.send(input: .appear)
                }
        case let .loaded(events):
            eventList(events: events)
        case .empty:
            Text("Event log not found.")
        }
    }
    
    private var resetButton: some View {
        Button {
            viewModel.send(input: .reset)
        } label: {
            Image(systemName: "trash")
        }
    }
    
    private func eventList(events: [Transition]) -> some View {
        List(events, id: \.description) { event in
            Text(event.description)
        }
    }
}
