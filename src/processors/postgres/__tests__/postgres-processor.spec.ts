import {Knex} from 'knex';
import {newDb} from 'pg-mem';

describe('PostgresProcessor', () => {
	let knex: Knex;

	beforeAll(async () => {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		knex = newDb().adapters.createKnex();
	});

	afterEach(async () => {
		// Drop the
	});

	afterAll(async () => {
		// Close the connection
	});

	it('should process a single doc', async () => {
		await knex.schema.createTable('users', (table) => {
			table.increments('id');
			table.string('name');
		});

		await knex('users').insert({name: 'John'});

		const selectedRows1 = await knex('users').select('name');
		expect(selectedRows1[0].name).toBe('John');

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

		// check again
		const selectedRows2 = await knex('users').select('name');
		expect(selectedRows2[0].name).toBe('****');
	});

	it.todo('should process multiple docs');
});
