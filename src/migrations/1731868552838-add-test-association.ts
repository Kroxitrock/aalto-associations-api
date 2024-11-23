import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddTestAssociation1731868552838 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
    INSERT INTO public.association ("name",description,telegram,phone,email,membership_fee)
        VALUES ('Aalto Salsa Association','Get ready to level up your game at the Student Basketball Training Day! This event is open to all skill levels, whether you''''re just starting or looking to refine your skills. Our coaches will take you through drills, shooting techniques, and game strategies to improve your performance on the court. It’s a great way to meet other players, stay active, and have fun. All you need to bring is your energy and a love for the game','@ass','+358 8888888','test@email.com',10);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`-- Auto-generated SQL script #202411172056
    DELETE FROM public.association
        WHERE name = 'Aalto Salsa Association';
    `);
  }
}
