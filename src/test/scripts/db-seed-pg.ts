// Create a fake mongo db
import 'dotenv/config'; // eslint-disable-line import/no-unassigned-import
import process from 'node:process';
import knex, {Knex} from 'knex';
import {userFactory} from '../factories/user';

const sampleTableName = 'users';

async function run() {
	const connectionString = process.env.POSTGRES_DB_URI;
	if (connectionString) {
		const client: Knex = knex({
			client: 'pg',
			connection: {connectionString},
		});
		try {
			await client.schema.dropTableIfExists(sampleTableName);
			// Insert random users
			await client(sampleTableName).insert(userFactory.buildList(10));
		} catch (error: unknown) {
			console.error(error);
		} finally {
			await client.destroy();
		}
	}
}

void run();
