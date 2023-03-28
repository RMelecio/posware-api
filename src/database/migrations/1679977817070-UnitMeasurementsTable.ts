import { MigrationInterface, QueryRunner } from "typeorm";

export class UnitMeasurementsTable1679977817070 implements MigrationInterface {
    name = 'UnitMeasurementsTable1679977817070'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "unit_measurements" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "name" character varying NOT NULL, "abbreviation" character varying NOT NULL, "symbol" character varying(5), CONSTRAINT "PK_24da8c0261ebac9fd1ed2199744" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "unit_measurements"`);
    }

}
