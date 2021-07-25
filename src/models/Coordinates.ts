import { Column , Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('coordinates')
export default class Coordinates {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  xCoordinate: number;

  @Column()
  yCoordinate: number;

  @Column()
  navDirection: string;
}