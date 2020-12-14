//
//  SearchViewModel.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/07.
//

import Combine
import EventLogKit

final class SearchViewModel: ObservableObject {
    
    enum Input {
        case appear
        case searchBarTapped
        case search
        case cancelSearch
    }
    
    struct State {
        var newsList = [News]()
        var searchedText = String()
        var isEditing = false
    }
    
    private let useCase: SearchUseCaseType
    private let eventLogger: EventLoggerType
    private var cancellables = Set<AnyCancellable>()
    @Published var state = State()
    
    init(useCase: SearchUseCaseType = SearchUseCase(),
         eventLogger: EventLoggerType = MiniVibeApp.eventLogger) {
        self.useCase = useCase
        self.eventLogger = eventLogger
    }
    
    func send(_ input: Input) {
        switch input {
        case .appear:
            load()
        case .searchBarTapped:
            searchBarTapped()
        case .search:
            search()
        case .cancelSearch:
            resetSearchedText()
        }
    }
    
    private func load() {
        useCase.loadNews()
            .sink { _ in
                // error 처리
            } receiveValue: { [weak self] newsList in
                self?.state.newsList = newsList
            }
            .store(in: &cancellables)
    }
    
    private func searchBarTapped() {
        state.isEditing = true
    }
    
    private func search() {
        eventLogger.send(SearchLog(userId: 0,
                                   componentId: "searchBar",
                                   text: state.searchedText))
    }
    
    private func resetSearchedText() {
        state.searchedText = ""
        state.isEditing = false
    }
}
