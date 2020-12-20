import {
    Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany,
} from 'typeorm';
import Genre from './Genre';
import Artist from './Artist';
import Track from './Track';

@Entity()
class Album {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column('date')
    releaseDate: Date;

    @Column()
    imageUrl: string;

    @ManyToOne((type) => Genre, (genre) => genre.albums, { nullable: false })
    genre: Genre;

    @ManyToOne((type) => Artist, (artist) => artist.albums, { nullable: false })
    artist: Artist;

    @OneToMany((type) => Track, (track) => track.album)
    tracks: Track[];
}

export default Album;
