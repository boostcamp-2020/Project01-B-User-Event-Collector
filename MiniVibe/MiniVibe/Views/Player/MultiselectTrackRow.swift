//
//  MultiselectTrackRow.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/11/30.
//

import SwiftUI

struct MultiselectTrackRow: View {
    var body: some View {
        HStack {
            Image("album")
                .resizable()
                .frame(width: 60, height: 60)
                .border(Color.gray, width: 0.7)
                .padding(.horizontal, 4)
            
            VStack(alignment: .leading, spacing: 4) {
                Text("Dynamite")
                    .font(.title3)
                Text("방탄소년단")
                    .font(.subheadline)
                    .foregroundColor(.secondary)
            }

            Spacer()
        }
    }
}

struct MultiselectTrackRow_Previews: PreviewProvider {
    static var previews: some View {
        MultiselectTrackRow()
    }
}
