import { MigrationInterface, QueryRunner } from "typeorm";

export class WeightUnitsTable1680031953948 implements MigrationInterface {
    name = 'WeightUnitsTable1680031953948'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "weight_units" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "name" character varying NOT NULL, "abbreviation" character varying NOT NULL, "symbol" character varying(5), CONSTRAINT "PK_17f830c01d7ed8b74644cd2e4ba" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "weight_units"`);
    }

}
