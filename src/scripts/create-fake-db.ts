// Create a fake mongo db
import 'dotenv/config'; // eslint-disable-line import/no-unassigned-import
import mongoose from 'mongoose';
import process from 'node:process';

async function run() {
	const connectionString = process.env.DB_URI;

	if (connectionString) {
		try {
			console.info(`connecting to: ${connectionString}`);
			const db = await mongoose.connect(connectionString);
			console.log('connected!');
			await db.connection.close();
			console.info('disconnected');
		} catch {
			console.error('could not connect to db');
		}
	}
}

void run();

