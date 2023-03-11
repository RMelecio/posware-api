import { MigrationInterface, QueryRunner } from "typeorm";

export class UsersTable1678491313691 implements MigrationInterface {
    name = 'UsersTable1678491313691'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "user_name" character varying NOT NULL, "password" character varying NOT NULL, "name" character varying NOT NULL, "middle_name" character varying NOT NULL, "last_name" character varying NOT NULL, "mobil" character varying NOT NULL, "email" character varying NOT NULL, "role" integer NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
