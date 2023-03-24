import { MigrationInterface, QueryRunner } from "typeorm";

export class CustomerTable1679636041753 implements MigrationInterface {
    name = 'CustomerTable1679636041753'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "customers" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "alias" character varying NOT NULL, "name" character varying NOT NULL, "middle_name" character varying NOT NULL, "last_name" character varying NOT NULL, "trade_name" character varying NOT NULL, "rfc" character varying(20) NOT NULL, "mobil" character varying(20) NOT NULL, "email" character varying(100) NOT NULL, "credit_amount" integer NOT NULL, "credit_days" integer NOT NULL, "customer_type_id" integer, CONSTRAINT "UQ_f7adc840903b3774ea6602e5269" UNIQUE ("rfc"), CONSTRAINT "PK_133ec679a801fab5e070f73d3ea" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "customer_types" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "name" character varying NOT NULL, CONSTRAINT "PK_41189e434bffa8b2983bcc5bf07" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "customers" ADD CONSTRAINT "FK_0836faa8911a2c02a75e986e413" FOREIGN KEY ("customer_type_id") REFERENCES "customer_types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customers" DROP CONSTRAINT "FK_0836faa8911a2c02a75e986e413"`);
        await queryRunner.query(`DROP TABLE "customer_types"`);
        await queryRunner.query(`DROP TABLE "customers"`);
    }

}
