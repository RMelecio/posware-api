import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeMeasurementUnitTable1680023968893 implements MigrationInterface {
    name = 'ChangeMeasurementUnitTable1680023968893'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "measurement_units" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "name" character varying NOT NULL, "abbreviation" character varying NOT NULL, "symbol" character varying(5), CONSTRAINT "PK_c2442ce42194b3e63b4f502ad40" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "measurement_units"`);
    }

}
