//
//  EventLogView.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/10.
//

import SwiftUI

struct EventLogView: View {
    @FetchRequest(entity: Transition.entity(),
                  sortDescriptors: [])
    private var events: FetchedResults<Transition>
    
    var body: some View {
        List(events, id: \.description) { event in
            Text(event.description)
        }
    }
}

struct EventLogView_Previews: PreviewProvider {
    static var previews: some View {
        EventLogView()
    }
}
