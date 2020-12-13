//
//  MockStorages.swift
//  EventLogKitTests
//
//  Created by TTOzzi on 2020/12/13.
//

import Foundation
@testable import EventLogKit

struct MockLocalStorage: LocalStorageType {
    let saveHandler: (EventLogType) -> Void
    
    func save(_ event: EventLogType) {
        saveHandler(event)
    }
}

struct MockServerStorage: ServerStorageType {
    let sendHandler: (EventLogType) -> Void
    
    func send(_ event: EventLogType) {
        sendHandler(event)
    }
}
