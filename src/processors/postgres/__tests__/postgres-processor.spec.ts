import type {Pool as PoolType} from 'pg';
import {newDb} from 'pg-mem';

describe('PostgresProcessor', () => {
	let pool: PoolType;

	beforeAll(async () => {
		// eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/no-unsafe-assignment
		const {Pool} = newDb().adapters.createPg();
		// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment
		pool = new Pool();
	});

	afterEach(async () => {
		// Drop the
	});

	afterAll(async () => {
		// Close the connection
		await pool.end();
	});

	it('should process a single doc', async () => {
		await pool.query(
			'CREATE TABLE IF NOT EXISTS users(id SERIAL PRIMARY KEY, name VARCHAR(255) )',
		);
		await pool.query("INSERT INTO users (name) VALUES ('John')");

		const {rows: rows1} = await pool.query('SELECT * from USERS');
		expect(rows1[0].name).toBe('John');

		// Const config: Config = {
		// 	engine: 'postgres',
		// 	tables: [
		// 		{
		// 			name: 'users',
		// 			columns: [
		// 				{
		// 					name: 'firstName',
		// 					provider: 'mask',
		// 				},
		// 			],
		// 		},
		// 	],
		// };

		// Anonymize the users database
	});

	it.todo('should process multiple docs');
});
