// Create a fake mongo db
import {cyan} from 'chalk';
import 'dotenv/config'; // eslint-disable-line import/no-unassigned-import
import {MongoClient} from 'mongodb';
import process from 'node:process';
import {Product, productFactory} from '../factories/product-factory';
import {User, userFactory} from '../factories/user';

const usersCount = 10_000;
const productsCount = 10_000;

async function run() {
	const connectionString = process.env.MONGO_DB_URI;
	if (connectionString) {
		const client = new MongoClient(connectionString);
		try {
			await client.connect();
			const db = client.db('test');
			await db.dropDatabase();
			// User
			console.log(`creating ${cyan(usersCount)} users`);
			const users = db.collection<User>('users');
			await users.insertMany(userFactory.buildList(usersCount));
			// Products
			console.log(`creating ${cyan(productsCount)} products`);
			const products = db.collection<Product>('products');
			await products.insertMany(productFactory.buildList(productsCount));
		} catch (error: unknown) {
			console.error(error);
		} finally {
			await client.close();
		}
	}
}

void run();
