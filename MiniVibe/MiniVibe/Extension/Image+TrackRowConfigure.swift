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
        .frame(width: 60, height: 60)
        .border(Color.gray, width: 0.7)
        .padding(.horizontal, 4)
    }
}
