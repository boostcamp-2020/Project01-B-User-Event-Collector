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
                eventLogger.onAppear(identifier: identifier)
            }
            .onDisappear {
                eventLogger.onDisappear()
            }
    }
}

extension View {
    func logTransition(eventLogger: EventLogger, identifier: ViewIdentifier) -> some View {
        modifier(TransitionLogModifier(eventLogger: eventLogger, identifier: identifier))
    }
}
