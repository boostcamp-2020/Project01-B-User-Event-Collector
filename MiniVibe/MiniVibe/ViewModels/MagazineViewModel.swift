//
//  MagazineViewModel.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/08.
//

import Foundation
import Combine

class MagazineViewModel: ObservableObject {
    private let useCase = MagazineUseCase()
    private var cancellables = Set<AnyCancellable>()
    
    @Published var magazine: MagazineInfo?
    
    func load(using id: Int) {
        useCase.loadMagazine(using: id)
            .sink { _ in
                // error 처리
            } receiveValue: { [weak self] magazine in
                self?.magazine = magazine
            }
            .store(in: &cancellables)
    }
}
