import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FeedbackEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  username: string;
  @Column({ default: false })
  status: boolean;
  @Column()
  phoneNumber?: string;
  @Column()
  text: string;
}
