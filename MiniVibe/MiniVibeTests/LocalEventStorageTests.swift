//
//  LocalEventStorageTests.swift
//  MiniVibeTests
//
//  Created by TTOzzi on 2020/12/20.
//

import XCTest
@testable import MiniVibe

final class LocalEventStroageTests: XCTestCase {
    
    func test_save_and_reset_logs() {
        let storage = LocalEventStorage(.inMemory)
        let transitionLog = Appear(userId: 0, componentId: "test", page: "test")
        let searchLog = SearchLog(userId: 0, componentId: "test", text: "test")
        let likeLog = LikeLog(userId: 0, data: .init(type: "test", id: 0), isLike: true)
        let subscribeLog = SubscribeLog(userId: 0, componentId: "test")
        let moveTrackLog = MoveTrackLog(userId: 0, trackId: 0, source: 0, destination: 0)
        let engagementLog = Active(userId: 0)
        let upnextChangeLog = AddToUpnext(userId: 0, trackId: [0], componentId: "test")
        let saveLog = SaveLog(userId: 0, componentId: "test", data: .init(type: "test", id: 0))
        let playLog = PlayLog(userId: 0, trackId: 0, componentId: "test", isPlay: true)
        let shareLog = ShareLog(userId: 0, componentId: "test", data: .init(type: "test", id: 0))
        
        storage.save(transitionLog)
        storage.save(searchLog)
        storage.save(likeLog)
        storage.save(subscribeLog)
        storage.save(moveTrackLog)
        storage.save(engagementLog)
        storage.save(upnextChangeLog)
        storage.save(saveLog)
        storage.save(playLog)
        storage.save(shareLog)
        
        XCTAssertEqual(storage.events().count, 10)
        XCTAssertTrue(storage.events().contains(where: { $0.event == transitionLog.event }))
        XCTAssertTrue(storage.events().contains(where: { $0.event == searchLog.event }))
        XCTAssertTrue(storage.events().contains(where: { $0.event == likeLog.event }))
        XCTAssertTrue(storage.events().contains(where: { $0.event == subscribeLog.event }))
        XCTAssertTrue(storage.events().contains(where: { $0.event == moveTrackLog.event }))
        XCTAssertTrue(storage.events().contains(where: { $0.event == engagementLog.event }))
        XCTAssertTrue(storage.events().contains(where: { $0.event == upnextChangeLog.event }))
        XCTAssertTrue(storage.events().contains(where: { $0.event == saveLog.event }))
        XCTAssertTrue(storage.events().contains(where: { $0.event == playLog.event }))
        XCTAssertTrue(storage.events().contains(where: { $0.event == shareLog.event }))
        
        storage.reset()
        XCTAssertEqual(storage.events().count, 0)
    }
}
