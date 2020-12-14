//
//  NetworkService.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/11/26.
//

import Foundation
import Combine

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

enum RequestType: CustomStringConvertible {
    case get
    case post
    case delete

    var description: String {
        switch self {
        case .get:
            return "GET"
        case .post:
            return "POST"
        case .delete:
            return "DELETE"
        }
    }
}

protocol NetworkServiceType {
    func request(url: String, request type: RequestType, body: Data?) -> AnyPublisher<Data, NetworkError>
}

final class NetworkService: NetworkServiceType {
    private let session: URLSession
    
    init(session: URLSession = .shared) {
        self.session = session
    }
    
    func request(url: String, request type: RequestType = .get, body: Data? = nil) -> AnyPublisher<Data, NetworkError> {
        guard let url = URL(string: url) else {
            return Fail(error: NetworkError.invalidURL)
                .eraseToAnyPublisher()
        }
        var urlRequest = URLRequest(url: url)
        urlRequest.httpMethod = type.description
        urlRequest.httpBody = body
        urlRequest.setValue("application/json", forHTTPHeaderField: "Content-Type")
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
