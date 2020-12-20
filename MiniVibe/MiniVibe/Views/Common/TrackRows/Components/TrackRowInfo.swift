//
//  TrackRowInfoA.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/13.
//

import SwiftUI

struct TrackRowInfoA: View {
    let order: Int
    let title: String
    let artist: String
    
    var body: some View {
        HStack {
            Text("\(order)")
                .font(.title3)
                .padding(.horizontal, 4)
            
            VStack(alignment: .leading, spacing: 4) {
                Spacer()
                Text(title)
                    .font(.system(size: 17))
                    .lineLimit(1)
                
                Text(artist)
                    .font(.system(size: 13))
                    .foregroundColor(.secondary)
                
                Spacer()
            }
            
            Spacer()
            
        }
        .foregroundColor(.primary)
    }
}

struct TrackRowInfoB: View {
    let title: String
    let artist: String
    
    var body: some View {
        VStack(alignment: .leading, spacing: 4) {
            Spacer()
            Text(title)
                .font(.system(size: 17))
                .foregroundColor(.primary)
                .lineLimit(1)
            
            Text(artist)
                .font(.system(size: 13))
                .foregroundColor(.secondary)
            Spacer()
        }
    }
}

struct TrackRowInfoC: View {
    let order: Int
    let title: String
    
    var body: some View {
        HStack {
            HStack {
                Text("\(order)")
                    .font(.title3)
                    .bold()
                    .padding(.horizontal, 4)
                
                Text(title)
                    .font(.title3)
            }
            .padding(.vertical, 10)
        }
    }
}
