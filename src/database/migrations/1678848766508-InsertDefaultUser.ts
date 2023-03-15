import { MigrationInterface, QueryRunner } from 'typeorm';
import * as bcrypt from 'bcrypt';

export class InsertDefaultUser1678848766508 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.manager
				.createQueryBuilder()
				.insert()
				.into('users')
				.values({
					user_name: 'admin',
					password: await bcrypt.hash('admin', 10),
					name: 'Adminitrador',
					middle_name: 'Administrador',
					last_name: 'Administrado',
					mobil: '3333333333',
					email: 'admin@admin.com',
					role: 1,
				})
        .execute();
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
			await queryRunner.manager
				.createQueryBuilder()
				.delete()
				.from("users")
				.where({ user_name: "admin" })
				.execute();
    }

}
