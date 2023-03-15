import { Post } from 'src/posts/entities/post.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ type: 'text' })
  description: string;

  @Column()
  country: string;

  @Column()
  city: string;

  @Column()
  street: string;

  @Column()
  houseNr: string;

  @Column()
  phone: string;

  @Column({ unique: true })
  email: string;

  // This column will not be selected by find functions and  QueryBuilder
  //@Column({ select: false })
  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: ['beekeeper', 'customer', 'shop', 'admin'],
    default: 'customer',
  })
  role: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column({ nullable: true })
  modifiedAt: Date;

  @Column({ type: 'boolean', default: true })
  active: boolean;

  @OneToMany(() => Post, (post) => post.authorID)
  posts: Post[];
}
