import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'posts' })
export class Post {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  title: string;

  @Column({ type: 'text' })
  text: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column({ nullable: true })
  modifiedAt: Date;

  @Column({ default: 0 })
  views: number;

  @Column()
  postImage: string;

  @ManyToOne(() => User, (user) => user.posts)
  authorID: User;
}
