//
//  Mixtape.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/08.
//

import Foundation

struct Mixtapes: Decodable {
    let data: [Mixtape]
}

struct Mixtape: Decodable {
    let id: Int
    let title: String
    let subTitle: String
    let imageUrl: String
}
