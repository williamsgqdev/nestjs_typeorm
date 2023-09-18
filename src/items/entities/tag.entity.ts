import { AbstarctEntity } from '../../database/abstract.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Tag extends AbstarctEntity<Tag> {
  @Column()
  content: string;
}
