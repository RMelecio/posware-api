import { MigrationInterface, QueryRunner } from "typeorm";

export class AddRelationToCompanyTable1678858272322 implements MigrationInterface {
    name = 'AddRelationToCompanyTable1678858272322'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "warehouses" DROP CONSTRAINT "FK_79104e3f582e78a09395720738a"`);
        await queryRunner.query(`ALTER TABLE "warehouses" DROP CONSTRAINT "FK_6edeae5d9f4451a7a1701f4ea74"`);
        await queryRunner.query(`ALTER TABLE "warehouses" DROP COLUMN "is_active"`);
        await queryRunner.query(`ALTER TABLE "warehouses" DROP COLUMN "office_id"`);
        await queryRunner.query(`ALTER TABLE "warehouses" DROP COLUMN "warehose_type_id"`);
        await queryRunner.query(`ALTER TABLE "warehouses" ADD "is_active" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "warehouses" ADD "office_id" integer`);
        await queryRunner.query(`ALTER TABLE "warehouses" ADD "warehose_type_id" integer`);
        await queryRunner.query(`ALTER TABLE "offices" ADD "company_id" integer`);
        await queryRunner.query(`ALTER TABLE "warehouses" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "warehouses" ADD "name" character varying(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "warehouses" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "warehouses" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "warehouses" ADD CONSTRAINT "FK_79104e3f582e78a09395720738a" FOREIGN KEY ("office_id") REFERENCES "offices"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "warehouses" ADD CONSTRAINT "FK_6edeae5d9f4451a7a1701f4ea74" FOREIGN KEY ("warehose_type_id") REFERENCES "warehouses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "offices" ADD CONSTRAINT "FK_d33767ad6bec746b339479e3396" FOREIGN KEY ("company_id") REFERENCES "companies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "offices" DROP CONSTRAINT "FK_d33767ad6bec746b339479e3396"`);
        await queryRunner.query(`ALTER TABLE "warehouses" DROP CONSTRAINT "FK_6edeae5d9f4451a7a1701f4ea74"`);
        await queryRunner.query(`ALTER TABLE "warehouses" DROP CONSTRAINT "FK_79104e3f582e78a09395720738a"`);
        await queryRunner.query(`ALTER TABLE "warehouses" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "warehouses" ADD "name" character varying(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "warehouses" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "warehouses" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "offices" DROP COLUMN "company_id"`);
        await queryRunner.query(`ALTER TABLE "warehouses" DROP COLUMN "warehose_type_id"`);
        await queryRunner.query(`ALTER TABLE "warehouses" DROP COLUMN "office_id"`);
        await queryRunner.query(`ALTER TABLE "warehouses" DROP COLUMN "is_active"`);
        await queryRunner.query(`ALTER TABLE "warehouses" ADD "warehose_type_id" integer`);
        await queryRunner.query(`ALTER TABLE "warehouses" ADD "office_id" integer`);
        await queryRunner.query(`ALTER TABLE "warehouses" ADD "is_active" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "warehouses" ADD CONSTRAINT "FK_6edeae5d9f4451a7a1701f4ea74" FOREIGN KEY ("warehose_type_id") REFERENCES "warehouses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "warehouses" ADD CONSTRAINT "FK_79104e3f582e78a09395720738a" FOREIGN KEY ("office_id") REFERENCES "offices"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
