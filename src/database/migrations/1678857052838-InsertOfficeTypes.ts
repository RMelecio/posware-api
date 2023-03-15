import { MigrationInterface, QueryRunner } from "typeorm"

export class InsertOfficeTypes1678857052838 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`
        INSERT INTO office_types (name)
        VALUES
          ('Corporativo'),
          ('Tienda'),
          ('Almacen')
      `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`
        DELETE FROM office_types WHERE name='Corporativo'
          OR name = 'Tienda'
          OR name = 'Almacen'
      `);
    }

}
