//
//  TransitionLogModifier.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/08.
//

import SwiftUI
import EventLogKit

struct TransitionLogModifier: ViewModifier {
    let identifier: ViewIdentifier
    let componentId: ComponentId
    
    func body(content: Content) -> some View {
        content
            .onAppear {
                MiniVibeApp.eventLogger.send(Appear(userId: 0,
                                        componentId: componentId.description,
                                        page: identifier.description))
            }
            .onDisappear {
                MiniVibeApp.eventLogger.send(Disappear(userId: 0,
                                           componentId: "disappear",
                                           page: identifier.description))
            }
    }
}

struct SubscribeLogModifier: ViewModifier {
    let componentId: String
    
    func body(content: Content) -> some View {
        content
            .onTapGesture {
                MiniVibeApp.eventLogger.send(SubscribeLog(userId: 0,
                                              componentId: componentId))
            }
    }
}

extension View {
    func logTransition(identifier: ViewIdentifier, componentId: ComponentId) -> some View {
        modifier(TransitionLogModifier(identifier: identifier, componentId: componentId))
    }
    
    func logSubscription(componentId: String) -> some View {
        modifier(SubscribeLogModifier(componentId: componentId))
    }
}
