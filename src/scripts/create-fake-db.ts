// Create a fake mongo db
import 'dotenv/config'; // eslint-disable-line import/no-unassigned-import
import process from 'node:process';
import {MongoClient} from 'mongodb';
import {userFactory} from '../factories/user';

interface User {
	id: number;
	name: string;
}

async function run() {
	const connectionString = process.env.DB_URI;
	if (connectionString) {
		const client = new MongoClient(connectionString);
		try {
			await client.connect();
			const db = client.db('test');
			await db.dropDatabase();
			const users = db.collection<User>('users');
			await users.insertMany(userFactory.buildList(5));
		} finally {
			await client.close();
		}
	}
}

void run();
