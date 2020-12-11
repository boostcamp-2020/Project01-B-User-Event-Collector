//
//  LogData.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/11.
//
import Foundation

@objc(LogData)
public final class LogData: NSSecureUnarchiveFromDataTransformer, NSCoding, Encodable {
    public let type: String
    public let id: Int
    
    public init(type: String, id: Int) {
        self.type = type
        self.id = id
    }
    
    public required init?(coder: NSCoder) {
        type = (coder.decodeObject(forKey: "type") as? String) ?? "none"
        id = coder.decodeInteger(forKey: "id")
    }
    
    public func encode(with coder: NSCoder) {
        coder.encode(type, forKey: "type")
        coder.encode(id, forKey: "id")
    }
}

extension LogData {
    public override var description: String {
        return "\(type)-\(id)"
    }
}
