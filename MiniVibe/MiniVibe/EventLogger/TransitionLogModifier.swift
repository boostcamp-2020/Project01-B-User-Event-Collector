//
//  TransitionLogModifier.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/08.
//

import SwiftUI

struct TransitionLogModifier: ViewModifier {
    let eventLogger: EventLogger
    let identifier: ViewIdentifier
    
    func body(content: Content) -> some View {
        content
            .onAppear {
                eventLogger.send(Appear(userId: 0,
                                        componentId: "appear_comp_id",
                                        page: identifier.description))
            }
            .onDisappear {
                eventLogger.send(Disappear(userId: 0,
                                           componentId: "disappear_comp_id",
                                           page: identifier.description))
            }
    }
}

extension View {
    func logTransition(eventLogger: EventLogger, identifier: ViewIdentifier) -> some View {
        modifier(TransitionLogModifier(eventLogger: eventLogger, identifier: identifier))
    }
}
