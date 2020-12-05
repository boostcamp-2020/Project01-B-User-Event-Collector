import {
    Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn,
} from 'typeorm';
import Album from './Album';

@Entity()
class News {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    imageUrl: string;

    @Column('date')
    date: Date;

    @Column()
    link: string;

    @OneToOne(() => Album, { nullable: false })
    @JoinColumn()
    album: Album;
}

export default News;
