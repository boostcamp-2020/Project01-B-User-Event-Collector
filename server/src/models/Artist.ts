import {
    Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany,
} from 'typeorm';
import Genre from './Genre';
import Album from './Album';

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

    @OneToMany((type) => Album, (album) => album.genre)
    albums: Album[];
}

export default Artist;
