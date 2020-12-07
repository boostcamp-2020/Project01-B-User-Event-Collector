//
//  News.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/07.
//

import Foundation

struct NewsList: Decodable {
    let data: [News]
}

struct News: Decodable {
    let id: Int
    let title: String
    let imageUrl: String
    let date: String
    let link: String
    let albumId: Int
}
