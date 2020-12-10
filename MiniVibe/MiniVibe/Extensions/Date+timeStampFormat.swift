//
//  Date+timeStampFormat.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/10.
//

import Foundation

extension Date {
    func timestampFormat() -> String {
        let formatter = DateFormatter()
        formatter.dateFormat = "yyyy-MM-dd HH:mm:ss"
        formatter.timeZone = .current
        return formatter.string(from: self)
    }
}
