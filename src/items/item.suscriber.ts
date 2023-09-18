import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { Item } from './entities/item.entity';
import { Logger } from '@nestjs/common';

@EventSubscriber()
export class ItemSuscriber implements EntitySubscriberInterface<Item> {
  private readonly logger = new Logger(ItemSuscriber.name);

  constructor(dataSource: DataSource) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return Item;
  }

  beforeInsert(event: InsertEvent<Item>): void | Promise<any> {
    this.logger.log(`before insert event : `, JSON.stringify(event.entity));
  }

  afterInsert(event: InsertEvent<Item>): void | Promise<any> {
    this.logger.log(`after insert event : `, JSON.stringify(event.entity));
  }
}
