//
//  ReachabilityObserverTests.swift
//  EventLogKitTests
//
//  Created by TTOzzi on 2020/12/13.
//

import XCTest
@testable import EventLogKit

final class ReachabilityObserverTests: XCTestCase {
    
    private var reachabilityObserver: ReachablilityObserver?
    
    func test_reachability_with_vaild_hostName() {
        let expectation = XCTestExpectation(description: "test vaild hostName")
        defer { wait(for: [expectation], timeout: 5) }
        
        let invaildHostName = "www.google.com"
        reachabilityObserver = ReachablilityObserver(hostName: invaildHostName)
        reachabilityObserver?.setUpNotify { state in
            switch state {
            case .cellular, .wifi:
                expectation.fulfill()
            default:
                XCTFail()
            }
        }
    }
    
    func test_reachability_with_invaild_hostName() {
        let expectation = XCTestExpectation(description: "test invaild hostName")
        defer { wait(for: [expectation], timeout: 5) }
        
        let invaildHostName = "invaildHostName"
        reachabilityObserver = ReachablilityObserver(hostName: invaildHostName)
        reachabilityObserver?.setUpNotify { state in
            // 잘못된 호스트 이름을 넘겨서 테스트하면 첫번째 값으로 연결 가능하다는 state가 오고 콜백을 받고난 후 두번째 값으로 unavailable이 옴
            if state == .unavailable {
                expectation.fulfill()
            }
        }
    }
}
