//
//  EventPrintable.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/10.
//

import Foundation

protocol EventPrintable: CustomStringConvertible {
    var event: String { get }
    var timestamp: Date { get }
}
