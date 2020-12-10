//
//  LogData.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/11.
//

import Foundation

public final class LogData: NSObject, Encodable {
    let type: String
    let id: Int
    
    init(type: String, id: Int) {
        self.type = type
        self.id = id
    }
}

extension LogData {
    public override var description: String {
        return "\(type)-\(id)"
    }
}
