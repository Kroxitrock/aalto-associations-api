import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateEvent1731405887299 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE public."event" (
                id serial NOT NULL,
                title varchar NOT NULL,
                description varchar NULL,
                picture varchar NULL,
                "date" date NULL,
                "location" varchar NULL,
                price decimal NOT NULL,
                capacity int NULL,
                CONSTRAINT event_pk PRIMARY KEY (id)
            );

        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`DROP TABLE public."event";`);
  }
}
