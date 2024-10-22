import {
    Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable,
} from 'typeorm';
import Playlist from './Playlist';
import Track from './Track';
import Album from './Album';
import Artist from './Artist';

@Entity()
class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    name: string;

    @Column()
    imageUrl: string;

    @ManyToMany(() => Track, (track) => track.likeUsers)
    @JoinTable({ name: 'library_tracks' })
    libraryTracks: Track[];

    @ManyToMany(() => Album)
    @JoinTable({ name: 'library_albums' })
    libraryAlbums: Album[];

    @ManyToMany(() => Artist)
    @JoinTable({ name: 'library_artists' })
    libraryArtists: Artist[];

    @ManyToMany(() => Playlist)
    @JoinTable({ name: 'library_playlists' })
    libraryPlaylists: Playlist[];
}

export default User;
