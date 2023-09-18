import { Logger } from '@nestjs/common';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class PublicItems1695037749710 implements MigrationInterface {
  private readonly logger = new Logger(PublicItems1695037749710.name);

  public async up(queryRunner: QueryRunner): Promise<void> {
    this.logger.log('UP');
    await queryRunner.query('UPDATE item SET public = true');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    this.logger.log('DOWN');
  }
}
