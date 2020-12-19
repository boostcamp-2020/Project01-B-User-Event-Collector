//
//  EventLogUseCase.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/20.
//

import Combine
import Foundation

protocol EventLogUseCaseType {
    func loadCommonEvents() -> AnyPublisher<[EventLog], Never>
    func loadPlayEvents() -> AnyPublisher<[EventLog], Never>
}

struct EventLogUseCase: EventLogUseCaseType {
    
    private let network: NetworkServiceType
    
    init(network: NetworkServiceType = NetworkService()) {
        self.network = network
    }
    
    func loadCommonEvents() -> AnyPublisher<[EventLog], Never> {
        network.request(url: EventEndPoint.common.urlString,
                        request: .get,
                        body: nil)
            .decode(type: EventLogResponse.self, decoder: JSONDecoder())
            .replaceError(with: .init(data: []))
            .map {
                Array(
                    $0.data
                        .filter { $0.platform == "iOS" }
                        .prefix(100)
                )
            }
            .receive(on: DispatchQueue.main)
            .eraseToAnyPublisher()
        
    }
    
    func loadPlayEvents() -> AnyPublisher<[EventLog], Never> {
        network.request(url: EventEndPoint.play.urlString,
                        request: .get,
                        body: nil)
            .decode(type: EventLogResponse.self, decoder: JSONDecoder())
            .replaceError(with: .init(data: []))
            .map {
                Array(
                    $0.data
                        .filter { $0.platform == "iOS" }
                        .prefix(100)
                )
            }
            .receive(on: DispatchQueue.main)
            .eraseToAnyPublisher()
    }
}
