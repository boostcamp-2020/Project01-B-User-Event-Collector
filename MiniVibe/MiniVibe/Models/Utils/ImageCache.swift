//
//  ImageCache.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/07.
//

import Foundation
import class UIKit.UIImage

protocol ImageCache {
    subscript(_ urlString: String) -> UIImage? { get set }
}

struct TemporaryImageCache: ImageCache {
    private let cache = NSCache<NSString, UIImage>()
    
    subscript(urlString: String) -> UIImage? {
        get { cache.object(forKey: urlString as NSString) }
        set {
            guard let image = newValue else {
                cache.removeObject(forKey: urlString as NSString)
                return
            }
            cache.setObject(image, forKey: urlString as NSString)
        }
    }
}
