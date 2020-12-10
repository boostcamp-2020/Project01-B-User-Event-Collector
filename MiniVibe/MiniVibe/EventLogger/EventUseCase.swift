//
//  EventUseCase.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/08.
//

import Foundation

final class EventUseCase {
    
    func transition(current: ViewIdentifier?, destination: ViewIdentifier?) {
        guard let current = current,
              let destination = destination else { return }
    }
}
