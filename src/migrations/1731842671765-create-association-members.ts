import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateAssociationMembers1731842671765
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE public.association_members (
            user_id int NOT NULL,
            association_id int NOT NULL,
            "role" varchar NOT NULL,
            CONSTRAINT association_members_pk PRIMARY KEY (user_id,association_id)
        );`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`DROP TABLE public."association_members";`);
  }
}
