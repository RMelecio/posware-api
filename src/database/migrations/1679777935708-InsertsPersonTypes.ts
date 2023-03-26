import { MigrationInterface, QueryRunner } from "typeorm"

export class InsertsPersonTypes1679777935708 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO person_types (name)
      VALUES
        ('Persona fisica'),
        ('Persona moral')
    `);
  }

public async down(queryRunner: QueryRunner): Promise<void> {
  await queryRunner.query(`
    DELETE FROM person_types 
      WHERE name='Persona fisica'
      OR name = 'Persona moral'
  `);
}

}
