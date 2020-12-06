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

    @Column()
    subTitle: string;

    @Column({ nullable: true })
    description: string;

    @Column()
    imageUrl: string;

    @Column()
    customized: boolean; // true: user가 만든 playlist, false: vibe에서 제공하는 playlist

    @ManyToMany(() => Track)
    @JoinTable({ name: 'playlist_track' })
    tracks: Track[];
}

export default Playlist;
