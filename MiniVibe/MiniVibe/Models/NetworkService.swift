//
//  NetworkService.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/11/26.
//

import Foundation
import Combine

final class NetworkService {
    
    enum NetworkError: Error {
        case invalidURL
        case unsuccessfulResponse
        case unknownError(message: String)
        
        var localizedDescription: String {
            switch self {
            case .invalidURL:
                return "Invalid URL"
            case .unsuccessfulResponse:
                return "Unsuccessful response"
            case .unknownError(let message):
                return "Unknown Error: \(message)"
            }
        }
    }
    
    private let session: URLSession
    
    init(session: URLSession = .shared) {
        self.session = session
    }
    
    func request(url: String) -> AnyPublisher<Data, NetworkError> {
        guard let url = URL(string: url) else {
            return Fail(error: NetworkError.invalidURL)
                .eraseToAnyPublisher()
        }
        let urlRequest = URLRequest(url: url)
        return session.dataTaskPublisher(for: urlRequest)
            .tryMap { (data, response) -> Data in
                guard let response = response as? HTTPURLResponse,
                      (200..<300).contains(response.statusCode) else {
                    throw NetworkError.unsuccessfulResponse
                }
                return data
            }
            .mapError { (error) -> NetworkError in
                if let error = error as? NetworkError {
                    return error
                }
                return .unknownError(message: error.localizedDescription)
            }
            .eraseToAnyPublisher()
    }
    
}
