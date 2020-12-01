//
//  MultiselectTabBarItems.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/01.
//

import SwiftUI

protocol CustomTabbarItem {
    var caption: String { get }
    var icon: Image { get }
    func itemFunction()
}

struct AddToPlaylist: CustomTabbarItem {
    let caption = "Add"
    let icon = Image(systemName: "text.badge.plus")
    func itemFunction() {
        print("Add to playlist pressed")
    }
}

struct Save: CustomTabbarItem {
    let caption = "Save"
    let icon = Image(systemName: "square.and.arrow.down")
    func itemFunction() {
        print("Save pressed")
    }
}

struct Delete: CustomTabbarItem {
    let caption = "Delete"
    let icon = Image(systemName: "trash")
    func itemFunction() {
        print("Delete pressed")
    }
}
