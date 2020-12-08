//
//  ViewLogger.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/08.
//

import Foundation

final class ViewNode {
    var identifier: ViewIdentifier
    var prev: ViewNode?
    var next: ViewNode?
    
    init(identifier: ViewIdentifier) {
        self.identifier = identifier
    }
}

extension ViewNode: Equatable {
    static func == (lhs: ViewNode, rhs: ViewNode) -> Bool {
        return lhs === rhs
    }
}

final class ViewLogger {
    private let useCase: EventUseCase
    var head: ViewNode?
    var tail: ViewNode?
    
    init(root: ViewIdentifier, useCase: EventUseCase = EventUseCase()) {
        head = ViewNode(identifier: root)
        tail = ViewNode(identifier: root)
        self.useCase = useCase
    }
    
    func viewAppear(identifier: ViewIdentifier) {
        let newNode = ViewNode(identifier: identifier)
        tail?.next = newNode
        newNode.prev = tail
        tail = newNode
        
        useCase.transition(current: newNode.prev?.identifier,
                           destination: newNode.identifier)
    }
    
    func viewDisappear() {
        guard head != tail else { return }
        useCase.transition(current: tail?.identifier, destination: tail?.prev?.identifier)
        tail = tail?.prev
        tail?.next = nil
    }
}
