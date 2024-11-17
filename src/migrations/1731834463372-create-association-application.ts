import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateAssociationApplication1731834463372
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE public.association_application (
            id serial NOT NULL,
            "date" date NOT NULL,
            status varchar NOT NULL,
            user_id int NOT NULL,
            association_id int NOT NULL,
            CONSTRAINT association_application_pk PRIMARY KEY (id)
        );

        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`DROP TABLE public."association_application";`);
  }
}
