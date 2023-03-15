import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUniqueAtribute1678849856372 implements MigrationInterface {
    name = 'AddUniqueAtribute1678849856372'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "warehouses" DROP CONSTRAINT "FK_79104e3f582e78a09395720738a"`);
        await queryRunner.query(`ALTER TABLE "warehouses" DROP CONSTRAINT "FK_6edeae5d9f4451a7a1701f4ea74"`);
        await queryRunner.query(`ALTER TABLE "warehouses" DROP COLUMN "is_active"`);
        await queryRunner.query(`ALTER TABLE "warehouses" DROP COLUMN "office_id"`);
        await queryRunner.query(`ALTER TABLE "warehouses" DROP COLUMN "warehose_type_id"`);
        await queryRunner.query(`ALTER TABLE "warehouse_locations" ADD "hash" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "warehouse_locations" ADD CONSTRAINT "UQ_b69328aa0e93749a54e6e1714a1" UNIQUE ("hash")`);
        await queryRunner.query(`ALTER TABLE "warehouses" ADD "is_active" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "warehouses" ADD "office_id" integer`);
        await queryRunner.query(`ALTER TABLE "warehouses" ADD "warehose_type_id" integer`);
        await queryRunner.query(`ALTER TABLE "warehouses" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "warehouses" ADD "name" character varying(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "warehouses" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "warehouses" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_074a1f262efaca6aba16f7ed920" UNIQUE ("user_name")`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_e4ee5da1f83df4269d150f7ca49" UNIQUE ("mobil")`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email")`);
        await queryRunner.query(`ALTER TABLE "companies" ADD CONSTRAINT "UQ_c0eaf27eab430da819643655682" UNIQUE ("rfc")`);
        await queryRunner.query(`ALTER TABLE "warehouses" ADD CONSTRAINT "FK_79104e3f582e78a09395720738a" FOREIGN KEY ("office_id") REFERENCES "offices"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "warehouses" ADD CONSTRAINT "FK_6edeae5d9f4451a7a1701f4ea74" FOREIGN KEY ("warehose_type_id") REFERENCES "warehouses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "warehouses" DROP CONSTRAINT "FK_6edeae5d9f4451a7a1701f4ea74"`);
        await queryRunner.query(`ALTER TABLE "warehouses" DROP CONSTRAINT "FK_79104e3f582e78a09395720738a"`);
        await queryRunner.query(`ALTER TABLE "companies" DROP CONSTRAINT "UQ_c0eaf27eab430da819643655682"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_e4ee5da1f83df4269d150f7ca49"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_074a1f262efaca6aba16f7ed920"`);
        await queryRunner.query(`ALTER TABLE "warehouses" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "warehouses" ADD "name" character varying(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "warehouses" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "warehouses" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "warehouses" DROP COLUMN "warehose_type_id"`);
        await queryRunner.query(`ALTER TABLE "warehouses" DROP COLUMN "office_id"`);
        await queryRunner.query(`ALTER TABLE "warehouses" DROP COLUMN "is_active"`);
        await queryRunner.query(`ALTER TABLE "warehouse_locations" DROP CONSTRAINT "UQ_b69328aa0e93749a54e6e1714a1"`);
        await queryRunner.query(`ALTER TABLE "warehouse_locations" DROP COLUMN "hash"`);
        await queryRunner.query(`ALTER TABLE "warehouses" ADD "warehose_type_id" integer`);
        await queryRunner.query(`ALTER TABLE "warehouses" ADD "office_id" integer`);
        await queryRunner.query(`ALTER TABLE "warehouses" ADD "is_active" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "warehouses" ADD CONSTRAINT "FK_6edeae5d9f4451a7a1701f4ea74" FOREIGN KEY ("warehose_type_id") REFERENCES "warehouses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "warehouses" ADD CONSTRAINT "FK_79104e3f582e78a09395720738a" FOREIGN KEY ("office_id") REFERENCES "offices"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
