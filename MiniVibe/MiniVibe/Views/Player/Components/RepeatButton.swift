//
//  RepeatButton.swift
//  MiniVibe
//
//  Created by TTOzzi on 2020/11/30.
//

import SwiftUI

struct RepeatButton: View {
    enum RepeatType {
        case none
        case `repeat`
        case repeatOne
        
        var imageName: String {
            switch self {
            case .none, .repeat:
                return "repeat"
            case .repeatOne:
                return "repeat.1"
            }
        }
        
        mutating func next() {
            switch self {
            case .none:
                self = .repeat
            case .repeat:
                self = .repeatOne
            case .repeatOne:
                self = .none
            }
        }
    }
    
    @State private var type = RepeatType.none
    
    var body: some View {
        Button {
            type.next()
        } label: {
            Image(systemName: type.imageName)
                .foregroundColor(type == .none ? .secondary : .accentColor)
        }
    }
}

struct RepeatButton_Previews: PreviewProvider {
    static var previews: some View {
        RepeatButton()
    }
}
