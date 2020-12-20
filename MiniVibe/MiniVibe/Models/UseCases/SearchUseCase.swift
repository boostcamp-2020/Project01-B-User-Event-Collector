//
//  SearchUseCase.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/07.
//

import Foundation
import Combine

protocol SearchUseCaseType {
    func loadNews() -> AnyPublisher<[News], UseCaseError>
}

struct SearchUseCase: SearchUseCaseType {
    private let network: NetworkServiceType
    
    init(network: NetworkServiceType = NetworkService()) {
        self.network = network
    }
    
    func loadNews() -> AnyPublisher<[News], UseCaseError> {
        return network.request(url: EndPoint.newsList.urlString, request: .get, body: nil)
            .decode(type: NewsList.self, decoder: JSONDecoder())
            .mapError { error -> UseCaseError in
                switch error {
                case is NetworkError:
                    return .networkError
                default:
                    return .decodingError
                }
            }
            .map(\.data)
            .receive(on: DispatchQueue.main)
            .eraseToAnyPublisher()
    }
}
