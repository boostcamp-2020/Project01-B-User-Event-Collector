//
//  View+ColorScheme.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/12.
//

import SwiftUI

extension View {
    var previewInAllColorSchemes: some View {
        ForEach(ColorScheme.allCases, id: \.self, content: preferredColorScheme)
    }
}
