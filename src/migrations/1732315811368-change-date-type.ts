import { MigrationInterface, QueryRunner } from 'typeorm';

export class ChangeDateType1732315811368 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(
      `ALTER TABLE public."event" ALTER COLUMN "date" TYPE timestamp USING "date"::timestamp;`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(
      `ALTER TABLE public."event" ALTER COLUMN "date" TYPE date USING "date"::date;`,
    );
  }
}
