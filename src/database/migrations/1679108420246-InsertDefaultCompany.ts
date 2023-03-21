import { MigrationInterface, QueryRunner } from 'typeorm'

export class InsertDefaultCompany1679108420246 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager
          .createQueryBuilder()
          .insert()
          .into('companies')
          .values({
            alias: 'Empresa',
            trade_name: 'Empresa Internacion de Ventas',
            rfc: 'XAXX010101000 ',
            fiscal_regime: '601',
            address: 'Av. Hidalgo 1000',
            settlement: 'Centro',
            location: 'Guadalajara',
            postal_code: 44750,
            city: 'Guadalajara',
            state: 'Jalisco',
            country: 'México',
            mobil: '3333333333',
            email: 'empresa@correo.com'
          })
          .execute();
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.manager
        .createQueryBuilder()
        .delete()
        .from('companies')
        .where({ alias: 'Empresa' })
        .execute();
    }

}
