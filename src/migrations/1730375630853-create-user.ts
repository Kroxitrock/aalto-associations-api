import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUser1730375630853 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
                CREATE TABLE public."user" (
                    id serial NOT NULL,
                    name varchar NOT NULL,
                    CONSTRAINT user_pk PRIMARY KEY (id)
                );
            `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`DROP TABLE public."user";`);
  }
}
