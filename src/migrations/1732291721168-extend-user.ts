import { MigrationInterface, QueryRunner } from 'typeorm';

export class ExtendUser1732291721168 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`ALTER TABLE public."user" ADD email varchar NULL;
ALTER TABLE public."user" ADD picture varchar NULL;

update public."user" set email = 'random@email.com' || id
where email is null;

ALTER TABLE public."user" ALTER COLUMN email SET NOT NULL;
ALTER TABLE public."user" ADD CONSTRAINT user_unique UNIQUE (email);
`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`ALTER TABLE public."user" DROP CONSTRAINT user_unique;
                        ALTER TABLE public."user" DROP COLUMN email;
                        ALTER TABLE public."user" DROP COLUMN picture;
                        `);
  }
}
