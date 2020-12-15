//
//  TrackInfoData.swift
//  MiniVibe
//
//  Created by Sue Cho on 2020/12/14.
//

import Foundation

@objc(TrackInfoData)
public final class TrackInfoData: NSSecureUnarchiveFromDataTransformer, NSCoding {
    public let id: Int
    public let title: String
    public let lyrics: String
    public let albumId: Int
    public let album: TrackAlbumData
    public let artist: ArtistData
    public let liked: Int

    public init(id: Int,
                title: String,
                lyrics: String,
                albumId: Int,
                album: TrackAlbumData,
                artist: ArtistData,
                liked: Int) {
        self.id = id
        self.title = title
        self.lyrics = lyrics
        self.albumId = albumId
        self.album = album
        self.artist = artist
        self.liked = liked
    }

    public required init?(coder: NSCoder) {
        id = coder.decodeInteger(forKey: "id")
        title = coder.decodeObject(forKey: "title") as? String ?? ""
        lyrics = coder.decodeObject(forKey: "lyrics") as? String ?? ""
        albumId = coder.decodeInteger(forKey: "albumId")
        album = coder.decodeObject(forKey: "album") as? TrackAlbumData
            ?? TrackAlbumData(id: 0, title: "default", imageUrl: "")
        artist = coder.decodeObject(forKey: "artist") as? ArtistData
            ?? ArtistData(id: 0, name: "default")
        liked = coder.decodeInteger(forKey: "liked")
    }
    
    public func encode(with coder: NSCoder) {
        coder.encode(id, forKey: "id")
        coder.encode(title, forKey: "title")
        coder.encode(lyrics, forKey: "lyrics")
        coder.encode(albumId, forKey: "albumId")
        coder.encode(album, forKey: "album")
        coder.encode(artist, forKey: "artist")
        coder.encode(liked, forKey: "liked")
    }
}

@objc(TrackAlbumData)
public final class TrackAlbumData: NSSecureUnarchiveFromDataTransformer, NSCoding {
    public let id: Int
    public let title: String
    public let imageUrl: String
    
    public init(id: Int, title: String, imageUrl: String) {
        self.id = id
        self.title = title
        self.imageUrl = imageUrl
    }
    
    public required init?(coder: NSCoder) {
        id = coder.decodeInteger(forKey: "id")
        title = coder.decodeObject(forKey: "title") as? String ?? ""
        imageUrl = coder.decodeObject(forKey: "imageUrl") as? String ?? ""
    }
    
    public func encode(with coder: NSCoder) {
        coder.encode(id, forKey: "id")
        coder.encode(title, forKey: "title")
        coder.encode(imageUrl, forKey: "imageUrl")
    }
}

@objc(ArtistData)
public final class ArtistData: NSSecureUnarchiveFromDataTransformer, NSCoding {
    public let id: Int
    public let name: String
    
    public init(id: Int, name: String) {
        self.id = id
        self.name = name
    }
    
    public required init?(coder: NSCoder) {
        id = coder.decodeInteger(forKey: "id")
        name = coder.decodeObject(forKey: "name") as? String ?? ""
    }
    
    public func encode(with coder: NSCoder) {
        coder.encode(id, forKey: "id")
        coder.encode(name, forKey: "name")
    }
}
