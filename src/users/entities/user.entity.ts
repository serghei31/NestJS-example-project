import {
  Column,
  CreateDateColumn,
  Entity,
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
  state: string;

  @Column()
  city: string;

  @Column()
  street: string;

  @Column()
  houseNr: number;

  @Column()
  phone: string;

  @Column({ unique: true })
  email: string;

  @Column({
    type: 'enum',
    enum: ['beekeeper', 'customer', 'shop', 'admin'],
    default: 'customer',
  })
  role: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column({ type: 'date', nullable: true })
  modifiedAt: Date;

  @Column({ type: 'boolean', default: true })
  active: boolean;
}