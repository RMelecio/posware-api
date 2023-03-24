import { MigrationInterface, QueryRunner } from "typeorm"

export class InsertsCustomerTypes1679636197803 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO customer_types (name)
      VALUES
        ('Persona fisica'),
        ('Persona moral')
    `);
  }

public async down(queryRunner: QueryRunner): Promise<void> {
  await queryRunner.query(`
    DELETE FROM customer_types 
      WHERE name='Persona fisica'
      OR name = 'Persona moral'
  `);
}

}
