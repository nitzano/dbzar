import {Knex} from 'knex';
import {newDb} from 'pg-mem';
import {Config} from '../../../config/types';
import {PostgresProcessor} from '../postgres-processor';

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
			table.string('firstName');
		});

		await knex('users').insert({firstName: 'John'});

		const selectedRows1 = await knex('users').select('firstName');
		expect(selectedRows1[0].firstName).toBe('John');

		const config: Config = {
			engine: 'postgres',
			tables: [
				{
					name: 'users',
					columns: [
						{
							name: 'firstName',
							provider: 'mask',
						},
					],
				},
			],
		};

		const spy = jest
			.spyOn(PostgresProcessor.prototype as any, 'buildClient')
			.mockImplementationOnce(() => knex);

		// Anonymize the db
		const processor: PostgresProcessor = new PostgresProcessor(
			config,
			'postgresql://localhost',
		);

		await processor.processDb();

		spy.mockRestore();

		// Check again
		const selectedRows2 = await knex('users').select('firstName');
		expect(selectedRows2[0].name).toBe('****');
	});

	it.todo('should process multiple docs');
});
