import {Knex} from 'knex';
import {newDb} from 'pg-mem';
import {PostgresProcessor} from '../postgres-processor';

describe('PostgresProcessor', () => {
	let knex: Knex;

	beforeEach(async () => {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		knex = newDb().adapters.createKnex();
	});

	afterEach(async () => {
		await knex.destroy();
	});

	it('should process a single doc', async () => {
		await knex.schema.createTable('users', (table) => {
			table.increments('id');
			table.string('firstName');
		});

		await knex('users').insert({firstName: 'John'});

		const selectedRows1 = await knex('users').select('firstName');
		expect(selectedRows1[0].firstName).toBe('John');

		const spy1 = jest
			.spyOn(knex.client, 'destroy')
			.mockImplementationOnce(async () => {
				// Do nothing
			});
		const spy2 = jest
			.spyOn(PostgresProcessor.prototype as any, 'buildClient')
			.mockImplementationOnce(() => knex);

		// Anonymize the db
		const processor: PostgresProcessor = new PostgresProcessor(
			'postgresql://localhost',
		);

		await processor.processColumn('users', 'firstName', 'mask');

		spy1.mockRestore();
		spy2.mockRestore();

		// Check again
		const selectedRows2 = await knex('users').select('firstName');
		expect(selectedRows2[0].firstName).toBe('****');
	});

	it('should process multiple rows', async () => {
		await knex.schema.createTable('users', (table) => {
			table.increments('id');
			table.string('firstName');
		});

		await knex('users').insert([{firstName: 'test1'}, {firstName: 'test2'}]);

		const spy1 = jest
			.spyOn(knex.client, 'destroy')
			.mockImplementationOnce(async () => {
				// Do nothing
			});
		const spy2 = jest
			.spyOn(PostgresProcessor.prototype as any, 'buildClient')
			.mockImplementationOnce(() => knex);

		// Anonymize the db
		const processor: PostgresProcessor = new PostgresProcessor(
			'postgresql://localhost',
		);

		await processor.processColumn('users', 'firstName', 'mask');

		spy1.mockRestore();
		spy2.mockRestore();

		// Check again
		const selectedRows2 = await knex('users').select('firstName');
		expect(selectedRows2[0].firstName).toBe('*****');
		expect(selectedRows2[1].firstName).toBe('*****');
	});
});
