import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateAssociation1731397412884 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
            CREATE TABLE public.association (
                id serial4 NOT NULL,
                "name" varchar NOT NULL,
                logo varchar NULL,
                description varchar NULL,
                telegram varchar NULL,
                phone varchar NULL,
                email varchar NULL,
                membership_fee decimal NOT NULL,
                CONSTRAINT association_pk PRIMARY KEY (id)
            );            
           `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`DROP TABLE public."association";`);
  }
}
