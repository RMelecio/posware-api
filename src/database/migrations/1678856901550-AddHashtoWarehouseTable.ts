import { MigrationInterface, QueryRunner } from "typeorm";

export class AddHashtoWarehouseTable1678856901550 implements MigrationInterface {
    name = 'AddHashtoWarehouseTable1678856901550'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "warehouses" DROP CONSTRAINT "FK_79104e3f582e78a09395720738a"`);
        await queryRunner.query(`ALTER TABLE "warehouses" DROP CONSTRAINT "FK_6edeae5d9f4451a7a1701f4ea74"`);
        await queryRunner.query(`ALTER TABLE "warehouses" DROP COLUMN "is_active"`);
        await queryRunner.query(`ALTER TABLE "warehouses" DROP COLUMN "office_id"`);
        await queryRunner.query(`ALTER TABLE "warehouses" DROP COLUMN "warehose_type_id"`);
        await queryRunner.query(`ALTER TABLE "warehouse_locations" ADD "is_default" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "warehouses" ADD "is_active" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "warehouses" ADD "office_id" integer`);
        await queryRunner.query(`ALTER TABLE "warehouses" ADD "warehose_type_id" integer`);
        await queryRunner.query(`ALTER TABLE "warehouses" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "warehouses" ADD "name" character varying(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "warehouses" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "warehouses" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "warehouses" ADD CONSTRAINT "FK_79104e3f582e78a09395720738a" FOREIGN KEY ("office_id") REFERENCES "offices"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "warehouses" ADD CONSTRAINT "FK_6edeae5d9f4451a7a1701f4ea74" FOREIGN KEY ("warehose_type_id") REFERENCES "warehouses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "warehouses" DROP CONSTRAINT "FK_6edeae5d9f4451a7a1701f4ea74"`);
        await queryRunner.query(`ALTER TABLE "warehouses" DROP CONSTRAINT "FK_79104e3f582e78a09395720738a"`);
        await queryRunner.query(`ALTER TABLE "warehouses" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "warehouses" ADD "name" character varying(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "warehouses" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "warehouses" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "warehouses" DROP COLUMN "warehose_type_id"`);
        await queryRunner.query(`ALTER TABLE "warehouses" DROP COLUMN "office_id"`);
        await queryRunner.query(`ALTER TABLE "warehouses" DROP COLUMN "is_active"`);
        await queryRunner.query(`ALTER TABLE "warehouse_locations" DROP COLUMN "is_default"`);
        await queryRunner.query(`ALTER TABLE "warehouses" ADD "warehose_type_id" integer`);
        await queryRunner.query(`ALTER TABLE "warehouses" ADD "office_id" integer`);
        await queryRunner.query(`ALTER TABLE "warehouses" ADD "is_active" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "warehouses" ADD CONSTRAINT "FK_6edeae5d9f4451a7a1701f4ea74" FOREIGN KEY ("warehose_type_id") REFERENCES "warehouses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "warehouses" ADD CONSTRAINT "FK_79104e3f582e78a09395720738a" FOREIGN KEY ("office_id") REFERENCES "offices"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
