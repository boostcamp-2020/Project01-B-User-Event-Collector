//
//  Image+TrackRowConfigure.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/02.
//

import SwiftUI

extension Image {
    func trackRowImageConfigure() -> some View {
        resizable()
        .frame(width: 50, height: 50)
        .border(Color.gray, width: 0.7)
    }
}
