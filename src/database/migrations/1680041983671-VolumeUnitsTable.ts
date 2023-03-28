import { MigrationInterface, QueryRunner } from "typeorm";

export class VolumeUnitsTable1680041983671 implements MigrationInterface {
    name = 'VolumeUnitsTable1680041983671'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "volume_units" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "name" character varying NOT NULL, "abbreviation" character varying NOT NULL, "symbol" character varying(5), CONSTRAINT "PK_9d8f20591f34fe9e460e2b1aea1" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "volume_units"`);
    }

}
