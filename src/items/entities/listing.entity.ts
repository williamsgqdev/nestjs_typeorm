import { AbstarctEntity } from '../../database/abstract.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Listing extends AbstarctEntity<Listing> {
  @Column()
  description: string;

  @Column()
  rating: number;
}
