import { MigrationInterface, QueryRunner } from "typeorm";

export class customerAddressesTable1679703386738 implements MigrationInterface {
    name = 'customerAddressesTable1679703386738'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "customer-addresses" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "name" character varying NOT NULL, "address" character varying NOT NULL, "settlement" character varying NOT NULL, "location" character varying NOT NULL, "postal_code" character varying(5) NOT NULL, "city" character varying NOT NULL, "state" character varying NOT NULL, "country" character varying NOT NULL, "is_billing" boolean NOT NULL, "is_delivery" boolean NOT NULL, "reference" character varying NOT NULL, "person_receives_name" character varying NOT NULL, "person_receives_mobil" character varying NOT NULL, "person_receives_email" character varying NOT NULL, "customer_id" integer, CONSTRAINT "PK_ae92d6765056e2fd2a8c762cf85" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "customer-addresses" ADD CONSTRAINT "FK_ac79e8e8193577b8256b5f54610" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customer-addresses" DROP CONSTRAINT "FK_ac79e8e8193577b8256b5f54610"`);
        await queryRunner.query(`DROP TABLE "customer-addresses"`);
    }

}
