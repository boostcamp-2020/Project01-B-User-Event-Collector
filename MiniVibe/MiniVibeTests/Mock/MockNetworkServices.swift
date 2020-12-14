//
//  MockNetworkServices.swift
//  MiniVibeTests
//
//  Created by TTOzzi on 2020/12/14.
//

import Combine
import Foundation
@testable import MiniVibe

struct MockSuccessNetworkService: NetworkServiceType {
    let data: Data
    
    func request(url: String, request type: RequestType, body: Data?) -> AnyPublisher<Data, NetworkError> {
        return Just(data)
            .setFailureType(to: NetworkError.self)
            .eraseToAnyPublisher()
    }
}

struct MockFailureNetworkService: NetworkServiceType {
    func request(url: String, request type: RequestType, body: Data?) -> AnyPublisher<Data, NetworkError> {
        return Just(Data())
            .setFailureType(to: NetworkError.self)
            .eraseToAnyPublisher()
    }
}
