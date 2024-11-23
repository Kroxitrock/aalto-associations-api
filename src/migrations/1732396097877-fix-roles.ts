import { MigrationInterface, QueryRunner } from 'typeorm';

export class FixRoles1732396097877 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`update association_members 
                        set "role" = 'LEADER'
                        where "role" = '1';

                        update association_members 
                        set "role" = 'MEMBER'
                        where "role" = '0';`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`update association_members 
        set "role" = '1'
        where "role" = 'LEADER';

        update association_members 
        set "role" = '0'
        where "role" = 'MEMBER';`);
  }
}
