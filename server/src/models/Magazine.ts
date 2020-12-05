import {
    Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn,
} from 'typeorm';
import Playlist from './Playlist';

@Entity()
class Magazine {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    imageUrl: string;

    @Column('date')
    date: Date;

    @Column()
    category: string;

    @OneToOne(() => Playlist)
    @JoinColumn()
    playlist: Playlist;
}

export default Magazine;
