//
//  LinkedList.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/08.
//

import Foundation

final class ViewNode {
    var identifier: String
    var prev: ViewNode?
    var next: ViewNode?
    
    init(identifier: String) {
        self.identifier = identifier
    }
}

final class ViewLogger {
    var head: ViewNode?
    var tail: ViewNode?
    
    var isEmpty: Bool {
        head == nil && tail == nil
    }
    
    func viewAppear(identifier: String) {
        let newNode = ViewNode(identifier: identifier)
        if isEmpty {
            head = newNode
            tail = newNode
        } else {
            tail?.next = newNode
            newNode.prev = tail
            tail = newNode
        }
    }
    
    func viewDisappear() {
        guard !isEmpty else { return }
        if tail?.prev == nil && head?.next == nil {
            head = nil
            tail = nil
        } else {
            tail = tail?.prev
            tail?.next = nil
        }
    }
}
