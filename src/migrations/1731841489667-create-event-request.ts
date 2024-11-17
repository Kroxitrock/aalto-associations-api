import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateEventRequest1731841489667 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE public.event_request (
                event_id int NOT NULL,
                user_id int NOT NULL,
                status varchar NOT NULL,
                creationg_date date NOT NULL,
                payment_document varchar NULL,
                CONSTRAINT event_request_pk PRIMARY KEY (user_id,event_id)
            );`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`DROP TABLE public."event_request";`);
  }
}
