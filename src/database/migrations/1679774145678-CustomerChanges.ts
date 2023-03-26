import { MigrationInterface, QueryRunner } from "typeorm";

export class CustomerChanges1679774145678 implements MigrationInterface {
    name = 'CustomerChanges1679774145678'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customers" DROP CONSTRAINT "FK_0836faa8911a2c02a75e986e413"`);
        await queryRunner.query(`CREATE TABLE "person_types" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "name" character varying NOT NULL, CONSTRAINT "PK_8aba3a0e5f072264285099a82fc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "contact_address_types" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "name" character varying NOT NULL, CONSTRAINT "PK_e53a7e491cb4c7d5bee98982b74" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "customer_contact_addresses" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "name" character varying NOT NULL, "person_title" character varying NOT NULL, "mobil" character varying NOT NULL, "email" character varying NOT NULL, "job" character varying NOT NULL, "notes" character varying NOT NULL, "address" character varying NOT NULL, "settlement" character varying NOT NULL, "location" character varying NOT NULL, "postal_code" character varying(5) NOT NULL, "city" character varying NOT NULL, "state" character varying NOT NULL, "country" character varying NOT NULL, "reference" character varying NOT NULL, "customer_id" integer, "contact_address_type_id" integer, CONSTRAINT "PK_082ae3fac2da3cf7d0f9abb44ed" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "customers" DROP COLUMN "customer_type_id"`);
        await queryRunner.query(`ALTER TABLE "customers" ADD "web_site" character varying`);
        await queryRunner.query(`ALTER TABLE "customers" ADD "person_type_id" integer`);
        await queryRunner.query(`ALTER TABLE "customers" ADD CONSTRAINT "FK_b64b06a92d9c7bbd4825cd3a21b" FOREIGN KEY ("person_type_id") REFERENCES "person_types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "customer_contact_addresses" ADD CONSTRAINT "FK_07b14539c2bf63a22b030d4e7df" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "customer_contact_addresses" ADD CONSTRAINT "FK_5b938b7a2eb7f80324ef148caec" FOREIGN KEY ("contact_address_type_id") REFERENCES "contact_address_types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customer_contact_addresses" DROP CONSTRAINT "FK_5b938b7a2eb7f80324ef148caec"`);
        await queryRunner.query(`ALTER TABLE "customer_contact_addresses" DROP CONSTRAINT "FK_07b14539c2bf63a22b030d4e7df"`);
        await queryRunner.query(`ALTER TABLE "customers" DROP CONSTRAINT "FK_b64b06a92d9c7bbd4825cd3a21b"`);
        await queryRunner.query(`ALTER TABLE "customers" DROP COLUMN "person_type_id"`);
        await queryRunner.query(`ALTER TABLE "customers" DROP COLUMN "web_site"`);
        await queryRunner.query(`ALTER TABLE "customers" ADD "customer_type_id" integer`);
        await queryRunner.query(`DROP TABLE "customer_contact_addresses"`);
        await queryRunner.query(`DROP TABLE "contact_address_types"`);
        await queryRunner.query(`DROP TABLE "person_types"`);
        await queryRunner.query(`ALTER TABLE "customers" ADD CONSTRAINT "FK_0836faa8911a2c02a75e986e413" FOREIGN KEY ("customer_type_id") REFERENCES "customer_types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
