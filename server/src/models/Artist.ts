import {
    Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany,
} from 'typeorm';
import Genre from './Genre';
import Album from './Album';
import Track from './Track';

@Entity()
class Artist {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    imageUrl: string;

    @ManyToOne((type) => Genre, (genre) => genre.artists)
    genre: Genre;

    @OneToMany((type) => Album, (album) => album.artist)
    albums: Album[];

    @OneToMany((type) => Track, (track) => track.artist)
    tracks: Track[];
}

export default Artist;
