//
//  MenuCloseButton.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/12/02.
//

import SwiftUI

struct MenuCloseButton: View {
    init(action: @escaping () -> Void) {
        self.action = action
    }
    
    let action: () -> Void
    
    var body: some View {
        VStack(spacing: 0) {
            Divider()
            Button {
                action()
            } label: {
                Spacer()
                Text("닫기")
                    .foregroundColor(.secondary)
                    .font(.system(size: 18))
                Spacer()
            }
            .padding(.vertical)
        }
    }
}

struct MenuCloseButton_Previews: PreviewProvider {
    static var previews: some View {
        MenuCloseButton(action: { })
    }
}
