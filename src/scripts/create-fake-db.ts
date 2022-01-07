// Create a fake mongo db
import 'dotenv/config'; // eslint-disable-line import/no-unassigned-import
import process from 'node:process';

function run() {
	console.log(`connect to: ${process.env.DB_URI ?? 'unknown'}`);
}

run();

