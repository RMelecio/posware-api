import { MigrationInterface, QueryRunner } from "typeorm";

export class CompaniesTable1678729772833 implements MigrationInterface {
    name = 'CompaniesTable1678729772833'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "companies" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "alias" character varying(50) NOT NULL, "trade_name" character varying NOT NULL, "rfc" character varying(20) NOT NULL, "fiscal_regime" character varying NOT NULL, "address" character varying NOT NULL, "settlement" character varying NOT NULL, "location" character varying NOT NULL, "postal_code" character varying(5) NOT NULL, "city" character varying NOT NULL, "state" character varying NOT NULL, "country" character varying NOT NULL, "mobil" character varying(20) NOT NULL, "email" character varying(100) NOT NULL, CONSTRAINT "PK_d4bc3e82a314fa9e29f652c2c22" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "companies"`);
    }

}
