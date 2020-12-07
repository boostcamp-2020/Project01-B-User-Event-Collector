import {
    Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany,
} from 'typeorm';
import Genre from './Genre';
import Artist from './Artist';
import Album from './Album';
import User from './User';

@Entity()
class Track {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column('text')
    lyrics: string;

    @Column()
    playtime: number;

    @ManyToOne((type) => Genre, (genre) => genre.tracks, { nullable: false })
    genre: Genre;

    @ManyToOne((type) => Artist, (artist) => artist.tracks, { nullable: false })
    artist: Artist;

    @ManyToOne((type) => Album, (album) => album.tracks, { nullable: false })
    album: Album;

    @ManyToMany(() => User, (user) => user.libraryTracks)
    likeUsers: User[];
}

export default Track;
