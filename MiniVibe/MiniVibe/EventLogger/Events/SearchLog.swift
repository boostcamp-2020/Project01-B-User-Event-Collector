//
//  SearchLog.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/10.
//

import CoreData

protocol SearchLogType: EventLogType {
    var componentId: String { get }
    var text: String { get }
}

extension SearchLogType {
    func save(context: NSManagedObjectContext) {
        let searchLog = Search(context: context)
        searchLog.event = event
        searchLog.userId = userId
        searchLog.componentId = componentId
        searchLog.text = text
        searchLog.timestamp = timestamp
        try? context.save()
    }
}

struct SearchLog: SearchLogType {
    let userId: Int
    let componentId: String
    let text: String
    let timestamp: String
}
