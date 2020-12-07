//
//  ImageLoader.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/07.
//

import Combine
import Foundation
import class UIKit.UIImage

final class ImageLoader: ObservableObject {
    @Published var image: UIImage?
    private let network: NetworkServiceType
    private let urlString: String
    private var cancellable: AnyCancellable?
    
    init(network: NetworkServiceType = NetworkService(),
         urlString: String) {
        self.network = network
        self.urlString = urlString
    }
    
    deinit {
        cancel()
    }
    
    func load() {
        cancellable = network.request(url: urlString)
            .map { UIImage(data: $0) }
            .replaceError(with: nil)
            .receive(on: DispatchQueue.main)
            .sink { [weak self] in self?.image = $0 }
    }
    
    func cancel() {
        cancellable?.cancel()
    }
}
