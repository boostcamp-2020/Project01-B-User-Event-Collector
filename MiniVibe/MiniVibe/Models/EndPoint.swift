//
//  EndPoint.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/07.
//

import Foundation

struct EndPoint {
    static let baseURL = "http://101.101.209.213:3000"
    static let albums = "\(baseURL)/api/albums"
    static let magazines = "\(baseURL)/api/magazines"
    static let playlists = "\(baseURL)/api/playlists"
    static let newsList = "\(baseURL)/api/news" // 뉴스 전체 목록을 뽑아올 주소
}
