//
//  MockSearchUseCase.swift
//  MiniVibeTests
//
//  Created by TTOzzi on 2020/12/15.
//

import Combine
import Foundation
@testable import MiniVibe

struct MockSearchUseCase: SearchUseCaseType {
    let news: [News]
    
    func loadNews() -> AnyPublisher<[News], UseCaseError> {
        return Just(news)
            .setFailureType(to: UseCaseError.self)
            .eraseToAnyPublisher()
    }
}
