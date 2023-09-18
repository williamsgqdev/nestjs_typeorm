import {
  Column,
  Entity,
  OneToOne,
  JoinColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Listing } from './listing.entity';
import { AbstarctEntity } from '../../database/abstract.entity';
import { Comment } from './comment.entity';
import { Tag } from './tag.entity';

@Entity()
export class Item extends AbstarctEntity<Item> {
  @Column()
  name: string;

  @Column({ default: true })
  public: boolean;

  @OneToOne(() => Listing, { cascade: true })
  @JoinColumn()
  listing: Listing;

  @OneToMany(() => Comment, (comment) => comment.item, { cascade: true })
  comments: Comment[];

  @ManyToMany(() => Tag, { cascade: true })
  @JoinTable()
  tags: Tag[];
}
