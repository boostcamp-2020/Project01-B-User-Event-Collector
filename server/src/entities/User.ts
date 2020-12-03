import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    name: string;

    @Column()
    image_url: string;
}

export default User;
