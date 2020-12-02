import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
