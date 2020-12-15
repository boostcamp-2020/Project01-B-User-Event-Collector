//
//  CustomEventLogType.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/15.
//

import Foundation
import EventLogKit

protocol CustomEventLogType: EventLogType {
    var userId: Int { get }
    var platform: String { get }
}

extension CustomEventLogType {
    var platform: String {
        return "iOS"
    }
}
