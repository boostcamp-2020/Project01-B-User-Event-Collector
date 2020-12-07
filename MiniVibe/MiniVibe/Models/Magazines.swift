//
//  Magazines.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/07.
//

import Foundation

struct Magazines: Decodable {
    let data: [Magazine]
}

struct Magazine: Decodable {
    let id: Int
    let title: String
    let imageUrl: String
    let category: String
}
