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

    @Column('text')
    description: string;

    @Column()
    subTitle: string;

    @Column('text')
    content: string;

    @Column('date')
    date: Date;

    @Column()
    category: string;

    @OneToOne(() => Playlist, { nullable: false })
    @JoinColumn()
    playlist: Playlist;
}

export default Magazine;
