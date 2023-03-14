import { MigrationInterface, QueryRunner } from "typeorm";

export class OfficesTables1678775372264 implements MigrationInterface {
    name = 'OfficesTables1678775372264'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "office_types" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "name" character varying(30) NOT NULL, CONSTRAINT "PK_ea9f55dd4281fa62b453966e0a7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "offices" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "alias" character varying(50) NOT NULL, "name" character varying NOT NULL, "address" character varying NOT NULL, "settlement" character varying NOT NULL, "location" character varying NOT NULL, "postal_code" character varying(5) NOT NULL, "city" character varying NOT NULL, "state" character varying NOT NULL, "country" character varying NOT NULL, "mobil" character varying(20) NOT NULL, "email" character varying(100) NOT NULL, "office_type_id" integer, CONSTRAINT "PK_1ea41502c6dddcec44ad9fcbbb3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "offices" ADD CONSTRAINT "FK_8479f190354be35954e14b66d4b" FOREIGN KEY ("office_type_id") REFERENCES "office_types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "offices" DROP CONSTRAINT "FK_8479f190354be35954e14b66d4b"`);
        await queryRunner.query(`DROP TABLE "offices"`);
        await queryRunner.query(`DROP TABLE "office_types"`);
    }

}
