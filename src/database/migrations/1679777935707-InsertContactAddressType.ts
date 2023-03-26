import { MigrationInterface, QueryRunner } from "typeorm"

export class InsertContactAddressType1679777935707 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO contact_address_types (name)
        VALUES
          ('Contacto'),
          ('Dirección de facturación'),
          ('Dirección de entrega'),
          ('Otra dirección')
      `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DELETE FROM contact_address_types
        WHERE name = 'Contacto'
          OR name = 'Dirección de facturación'
          OR name = 'Dirección de entrega'
          OR name = 'Otra dirección'
      `);
  }

}
