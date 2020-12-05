// Table Track {
//     id int [pk, increment]
//     title varchar
//     artist_id int [ref: > Artist.id]
//     lyrics varchar
//     album_id int [ref: > Album.id]
//     genre_id int [ref: > Genre.id]
//     playtime int
//   }

import {
    Entity, PrimaryGeneratedColumn, Column, ManyToOne,
} from 'typeorm';
import Genre from './Genre';
import Artist from './Artist';
import Album from './Album';

@Entity()
class Track {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    lyrics: string;

    @Column('date')
    releaseDate: Date;

    @Column()
    playtime: number;

    @ManyToOne((type) => Genre, (genre) => genre.tracks, { nullable: false })
    genre: Genre;

    @ManyToOne((type) => Artist, (artist) => artist.tracks, { nullable: false })
    artist: Artist;

    @ManyToOne((type) => Album, (album) => album.tracks, { nullable: false })
    album: Album;
}

export default Track;
