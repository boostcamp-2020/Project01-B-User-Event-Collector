import {
    Entity, PrimaryGeneratedColumn, Column, ManyToOne,
} from 'typeorm';
import User from './User';

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

    @ManyToOne((type) => User, (user) => user.playlists)
    user: User;
}

export default Playlist;
