import { MigrationInterface, QueryRunner } from "typeorm";

export class WarehouseTables1678848459469 implements MigrationInterface {
    name = 'WarehouseTables1678848459469'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "warehouse_locations" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "alias" character varying(30) NOT NULL, "floor" character varying(20) NOT NULL, "aisle" character varying(20) NOT NULL, "rack" character varying(20) NOT NULL, "level" character varying(20) NOT NULL, "bin" character varying(20) NOT NULL, "warehouse_id" integer, CONSTRAINT "PK_03d900f32f1fcd299452d9eee7f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "warehouses" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "name" character varying(20) NOT NULL, CONSTRAINT "PK_56ae21ee2432b2270b48867e4be" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "warehouses" ADD "is_active" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "warehouses" ADD "office_id" integer`);
        await queryRunner.query(`ALTER TABLE "warehouses" ADD "warehose_type_id" integer`);
        await queryRunner.query(`ALTER TABLE "warehouses" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "warehouses" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "warehouse_locations" ADD CONSTRAINT "FK_850b86bd98dd7d3647d6466789f" FOREIGN KEY ("warehouse_id") REFERENCES "warehouses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "warehouses" ADD CONSTRAINT "FK_79104e3f582e78a09395720738a" FOREIGN KEY ("office_id") REFERENCES "offices"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "warehouses" ADD CONSTRAINT "FK_6edeae5d9f4451a7a1701f4ea74" FOREIGN KEY ("warehose_type_id") REFERENCES "warehouses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "warehouses" DROP CONSTRAINT "FK_6edeae5d9f4451a7a1701f4ea74"`);
        await queryRunner.query(`ALTER TABLE "warehouses" DROP CONSTRAINT "FK_79104e3f582e78a09395720738a"`);
        await queryRunner.query(`ALTER TABLE "warehouse_locations" DROP CONSTRAINT "FK_850b86bd98dd7d3647d6466789f"`);
        await queryRunner.query(`ALTER TABLE "warehouses" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "warehouses" ADD "name" character varying(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "warehouses" DROP COLUMN "warehose_type_id"`);
        await queryRunner.query(`ALTER TABLE "warehouses" DROP COLUMN "office_id"`);
        await queryRunner.query(`ALTER TABLE "warehouses" DROP COLUMN "is_active"`);
        await queryRunner.query(`DROP TABLE "warehouses"`);
        await queryRunner.query(`DROP TABLE "warehouse_locations"`);
    }

}
