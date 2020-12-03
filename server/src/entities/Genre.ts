import {
    Entity, PrimaryGeneratedColumn, Column, OneToMany,
} from 'typeorm';
import Artist from './Artist';
import Album from './Album';

@Entity()
class Genre {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany((type) => Artist, (artist) => artist.genre)
    artists: Artist[];

    @OneToMany((type) => Album, (album) => album.genre)
    albums: Album[];
}

export default Genre;
