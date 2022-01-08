// Create a fake mongo db
import 'dotenv/config'; // eslint-disable-line import/no-unassigned-import
import {MongoClient} from 'mongodb';
import process from 'node:process';
import {User, userFactory} from '../factories/user';

async function run() {
	const connectionString = process.env.DB_URI;
	if (connectionString) {
		const client = new MongoClient(connectionString);
		try {
			await client.connect();
			const db = client.db('test');
			await db.dropDatabase();
			// User
			const users = db.collection<User>('users');
			await users.insertMany(userFactory.buildList(5));
		} catch (error: unknown) {
			console.error(error);
		} finally {
			await client.close();
		}
	}
}

void run();
