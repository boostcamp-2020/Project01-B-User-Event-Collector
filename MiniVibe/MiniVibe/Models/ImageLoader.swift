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
    private static let imageProcessingQueue = DispatchQueue(label: "imageProcessing")
    private let network: NetworkServiceType
    private var cache: ImageCache?
    private let urlString: String
    private var cancellable: AnyCancellable?
    private var isLoading = false
    
    init(network: NetworkServiceType = NetworkService(),
         cache: ImageCache? = nil,
         urlString: String) {
        self.network = network
        self.cache = cache
        self.urlString = urlString
    }
    
    deinit {
        cancel()
    }
    
    func load() {
        guard !isLoading else { return }
        
        if let image = cache?[urlString] {
            self.image = image
            return
        }
        
        cancellable = network.request(url: urlString)
            .subscribe(on: Self.imageProcessingQueue)
            .map { UIImage(data: $0) }
            .replaceError(with: nil)
            .handleEvents(receiveSubscription: { [weak self] _ in self?.isLoading = true },
                          receiveOutput: { [weak self] in self?.cache($0) },
                          receiveCompletion: { [weak self] _ in self?.isLoading = false },
                          receiveCancel: { [weak self] in self?.isLoading = false })
            .receive(on: DispatchQueue.main)
            .sink { [weak self] in self?.image = $0 }
    }
    
    func cancel() {
        cancellable?.cancel()
    }
    
    private func cache(_ image: UIImage?) {
        image.map { cache?[urlString] = $0 }
    }
}
