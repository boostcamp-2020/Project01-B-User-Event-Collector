//
//  SearchViewModel.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/07.
//

import Combine

final class SearchViewModel: ObservableObject {
    private let useCase: SearchUseCaseType
    private var cancellables = Set<AnyCancellable>()
    
    @Published private(set) var newsList = [News]()
    
    init(useCase: SearchUseCaseType = SearchUseCase()) {
        self.useCase = useCase
    }
    
    func load() {
        useCase.loadNews()
            .sink { _ in
                // error 처리
            } receiveValue: { [weak self] newsList in
                self?.newsList = newsList
            }
            .store(in: &cancellables)
    }
}
