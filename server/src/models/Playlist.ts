import {
    Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable,
} from 'typeorm';
import User from './User';
import Track from './Track';

@Entity()
class Playlist {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column({ nullable: true })
    description: string;

    @Column()
    imagerl: string;

    @ManyToOne((type) => User, (user) => user.playlists, { nullable: false })
    user: User;

    @ManyToMany(() => Track)
    @JoinTable({ name: 'playlist_track' })
    tracks: Track[];
}

export default Playlist;
