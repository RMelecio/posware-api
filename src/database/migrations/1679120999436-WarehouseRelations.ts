import { MigrationInterface, QueryRunner } from "typeorm";

export class WarehouseRelations1679120999436 implements MigrationInterface {
    name = 'WarehouseRelations1679120999436'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "warehouses" DROP CONSTRAINT "FK_6edeae5d9f4451a7a1701f4ea74"`);
        await queryRunner.query(`ALTER TABLE "warehouses" RENAME COLUMN "warehose_type_id" TO "warehouse_type_id"`);
        await queryRunner.query(`CREATE TABLE "profiles" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "name" character varying(30) NOT NULL, "description" character varying NOT NULL, "is_active" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_8e520eb4da7dc01d0e190447c8e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "warehouse_types" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "name" character varying(20) NOT NULL, CONSTRAINT "PK_5383ca6a61b8d98216c9326764f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "warehouses" ADD CONSTRAINT "FK_ced6015daa2c3554df9680b2775" FOREIGN KEY ("warehouse_type_id") REFERENCES "warehouse_types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "warehouses" DROP CONSTRAINT "FK_ced6015daa2c3554df9680b2775"`);
        await queryRunner.query(`DROP TABLE "warehouse_types"`);
        await queryRunner.query(`DROP TABLE "profiles"`);
        await queryRunner.query(`ALTER TABLE "warehouses" RENAME COLUMN "warehouse_type_id" TO "warehose_type_id"`);
        await queryRunner.query(`ALTER TABLE "warehouses" ADD CONSTRAINT "FK_6edeae5d9f4451a7a1701f4ea74" FOREIGN KEY ("warehose_type_id") REFERENCES "warehouses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
