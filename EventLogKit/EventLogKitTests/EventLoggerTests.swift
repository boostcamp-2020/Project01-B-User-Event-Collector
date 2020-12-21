//
//  EventLoggerTests.swift
//  EventLogKitTests
//
//  Created by TTOzzi on 2020/12/13.
//

import CoreData
import XCTest
@testable import EventLogKit

final class EventLoggerTests: XCTestCase {    

    struct MockEvent: EventLogType {
        var event: String
        var userId: Int
        var timestamp: Date
        
        func save(context: NSManagedObjectContext) {
            
        }
    }
    
    func test_send_when_available() {
        let expectation = XCTestExpectation(description: "available state")
        defer { wait(for: [expectation], timeout: 5) }
        
        let mockEvent = MockEvent(event: "event", userId: 0, timestamp: Date())
        let localStorage = MockLocalStorage { event in
            XCTFail()
        } sendToServerHandler: { }
        let serverStorage = MockServerStorage { event in
            expectation.fulfill()
        }
        let availableReachability = AvailableReachability()
        let eventLogger = EventLogger(local: localStorage,
                                      server: serverStorage,
                                      reachability: availableReachability)
        
        eventLogger.send(mockEvent)
    }
    
    func test_send_when_unavailable() {
        let expectation = XCTestExpectation(description: "unavailable state")
        defer { wait(for: [expectation], timeout: 5) }
        
        let mockEvent = MockEvent(event: "event", userId: 0, timestamp: Date())
        let localStorage = MockLocalStorage { event in
            expectation.fulfill()
        } sendToServerHandler: { }
        let serverStorage = MockServerStorage { event in
            XCTFail()
        }
        let unavailableReachability = UnavailableReachability()
        let eventLogger = EventLogger(local: localStorage,
                                      server: serverStorage,
                                      reachability: unavailableReachability)
        
        eventLogger.send(mockEvent)
    }
    
    func test_intergration() {
        let localStorageExpectation = XCTestExpectation(description: "test local storage recieve")
        localStorageExpectation.expectedFulfillmentCount = 2
        let serverStorageExpectation = XCTestExpectation(description: "test server storage recieve")
        serverStorageExpectation.expectedFulfillmentCount = 2
        defer { wait(for: [localStorageExpectation, serverStorageExpectation], timeout: 5) }
        
        let mockEvent = MockEvent(event: "event", userId: 0, timestamp: Date())
        let localStorage = MockLocalStorage { event in
            localStorageExpectation.fulfill()
        } sendToServerHandler: {
            localStorageExpectation.fulfill()
        }
        let serverStorage = MockServerStorage { event in
            serverStorageExpectation.fulfill()
        }
        let reachability = MockReachability()
        let eventLogger = EventLogger(local: localStorage,
                                      server: serverStorage,
                                      reachability: reachability)
        
        // serverStorageExpectation fullfill count 1
        reachability.state = .cellular
        eventLogger.send(mockEvent)
        // localStorageExpectation fullfill count 1
        reachability.state = .unavailable
        eventLogger.send(mockEvent)
        // serverStorageExpectation fullfill count 2
        // localStorageExpectation fullfill count 2 (sendToServer)
        reachability.state = .wifi
        eventLogger.send(mockEvent)
    }
}
