import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class createUserTable1664645594196 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'users',
				schema: 'inventory',
				columns: [
					{ name: 'id', type: 'bigint', isPrimary: true, isGenerated: true },
					{ name: 'name', type: 'varchar', length: '100', isNullable: false },
					{ name: 'password', type: 'varchar', length: '100', isNullable: false },
					{ name: 'created_at', type: 'timestamp', default: 'now()', isNullable: false },
					{ name: 'updated_at', type: 'timestamp', default: 'now()', isNullable: false },
					{ name: 'deleted_at', type: 'timestamp', isNullable: true },
				],
			}),
			true
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable(new Table({ name: 'users', schema: 'inventory' }));
	}
}
