import { MigrationInterface, QueryRunner } from "typeorm";

export class ProductRelationsTables1680071636976 implements MigrationInterface {
    name = 'ProductRelationsTables1680071636976'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "length_units" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "name" character varying NOT NULL, "abbreviation" character varying NOT NULL, "symbol" character varying(5), CONSTRAINT "PK_302a0c0ed4b06f4ccedefbaaece" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product_status" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "name" character varying NOT NULL, CONSTRAINT "PK_5cbdbd64e764236bb33ef5213df" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product_types" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "name" character varying NOT NULL, CONSTRAINT "PK_6ad7b08e6491a02ebc9ed82019d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "products" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "short_name" character varying(50), "name" character varying NOT NULL, "full_name" text, "slug" character varying NOT NULL, "url_imagen" character varying, "upc" character varying NOT NULL, "part_number" character varying NOT NULL, "has_serial_number" boolean NOT NULL, "has_taxes" boolean NOT NULL, "returnable_days" integer, "warranty_days" integer, "default_price" integer NOT NULL, "default_cost" integer, "average_cost" integer, "weight" integer, "volumen" integer, "length" integer, "height" integer, "width" integer, "is_purchasable" boolean NOT NULL, "cfdi_prodserv_code" character varying, "cfdi_unit_code" character varying, "max_stock" integer, "min_stock" integer, "brand_id" integer, "category_id" integer, "product_status_id" integer, "measurement_unit_id" integer, "product_type_id" integer, "weight_unit_id" integer, "volumen_unit_id" integer, "length_unit_id" integer, CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "parent_category_id " integer`);
        await queryRunner.query(`ALTER TABLE "categories" ADD CONSTRAINT "FK_44053f92181ea6f1c6f093423bf" FOREIGN KEY ("parent_category_id ") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_1530a6f15d3c79d1b70be98f2be" FOREIGN KEY ("brand_id") REFERENCES "brands"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_9a5f6868c96e0069e699f33e124" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_828ff4a3f4087b5f37593396cf5" FOREIGN KEY ("product_status_id") REFERENCES "product_status"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_3c6bc52ec3da3d20774865a72ee" FOREIGN KEY ("measurement_unit_id") REFERENCES "measurement_units"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_9adb63f24f86528856373f0ab9a" FOREIGN KEY ("product_type_id") REFERENCES "product_types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_813b50b71b4e6701d911abdc338" FOREIGN KEY ("weight_unit_id") REFERENCES "weight_units"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_4c92fec28ea3cad733cae340fef" FOREIGN KEY ("volumen_unit_id") REFERENCES "volume_units"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_ac7972f53729c29384f412e9377" FOREIGN KEY ("length_unit_id") REFERENCES "length_units"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_ac7972f53729c29384f412e9377"`);
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_4c92fec28ea3cad733cae340fef"`);
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_813b50b71b4e6701d911abdc338"`);
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_9adb63f24f86528856373f0ab9a"`);
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_3c6bc52ec3da3d20774865a72ee"`);
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_828ff4a3f4087b5f37593396cf5"`);
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_9a5f6868c96e0069e699f33e124"`);
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_1530a6f15d3c79d1b70be98f2be"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP CONSTRAINT "FK_44053f92181ea6f1c6f093423bf"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "parent_category_id "`);
        await queryRunner.query(`DROP TABLE "products"`);
        await queryRunner.query(`DROP TABLE "product_types"`);
        await queryRunner.query(`DROP TABLE "product_status"`);
        await queryRunner.query(`DROP TABLE "length_units"`);
    }

}
