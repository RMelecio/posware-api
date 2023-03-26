import { MigrationInterface, QueryRunner } from "typeorm";

export class ProviderTables1679777670343 implements MigrationInterface {
    name = 'ProviderTables1679777670343'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "providers" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "alias" character varying NOT NULL, "name" character varying, "middle_name" character varying, "last_name" character varying, "trade_name" character varying, "rfc" character varying(20) NOT NULL, "mobil" character varying(20), "email" character varying(100), "web_site" character varying, "credit_days" integer, "payment_conditions" character varying, "person_type_id" integer, CONSTRAINT "UQ_bf759f84ee106364dcc77ddc26f" UNIQUE ("rfc"), CONSTRAINT "PK_af13fc2ebf382fe0dad2e4793aa" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "provider_contact_addresses" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "name" character varying NOT NULL, "person_title" character varying, "mobil" character varying, "email" character varying, "job" character varying, "notes" character varying, "address" character varying, "settlement" character varying, "location" character varying, "postal_code" character varying(5), "city" character varying, "state" character varying, "country" character varying, "reference" character varying, "provider_id" integer, "contact_address_type_id" integer, CONSTRAINT "PK_2dcd31d5c1677b704868c67ad2c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "providers" ADD CONSTRAINT "FK_085953a10f1761b343872036378" FOREIGN KEY ("person_type_id") REFERENCES "person_types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "provider_contact_addresses" ADD CONSTRAINT "FK_077d628b876150b30331e0501d3" FOREIGN KEY ("provider_id") REFERENCES "providers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "provider_contact_addresses" ADD CONSTRAINT "FK_4253630bc2497e2244097c0f720" FOREIGN KEY ("contact_address_type_id") REFERENCES "contact_address_types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "provider_contact_addresses" DROP CONSTRAINT "FK_4253630bc2497e2244097c0f720"`);
        await queryRunner.query(`ALTER TABLE "provider_contact_addresses" DROP CONSTRAINT "FK_077d628b876150b30331e0501d3"`);
        await queryRunner.query(`ALTER TABLE "providers" DROP CONSTRAINT "FK_085953a10f1761b343872036378"`);
        await queryRunner.query(`DROP TABLE "provider_contact_addresses"`);
        await queryRunner.query(`DROP TABLE "providers"`);
    }

}
