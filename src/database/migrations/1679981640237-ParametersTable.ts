import { MigrationInterface, QueryRunner } from "typeorm";

export class ParametersTable1679981640237 implements MigrationInterface {
    name = 'ParametersTable1679981640237'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "parameters" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "category" character varying NOT NULL, "parameter" character varying NOT NULL, "available_values" character varying NOT NULL, "origin_remote" character varying, "selected_value" character varying NOT NULL, CONSTRAINT "PK_6b03a26baa3161f87fa87588859" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "parameters"`);
    }

}
