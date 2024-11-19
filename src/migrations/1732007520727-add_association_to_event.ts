import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddAssociationToEvent1732007520727 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            ALTER TABLE public."event" ADD association_id int NULL;
            UPDATE public."event"
                SET association_id = (select id from association a where a.name = 'Aalto Salsa Association')
                WHERE association_id is null;
            ALTER TABLE public."event" ALTER COLUMN association_id SET NOT NULL;
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`ALTER TABLE public."event" DROP COLUMN association_id;`);
  }
}
