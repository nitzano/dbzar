import process from 'process';
import {Db, MongoClient, MongoClientOptions} from 'mongodb';

describe('mongo-processor', () => {
	let connection: MongoClient;
	let db: Db;

	beforeAll(async () => {
		if (process.env.MONGO_URL) {
			connection = await MongoClient.connect(process.env.MONGO_URL, {
				useNewUrlParser: true,
				useUnifiedTopology: true,
			} as MongoClientOptions);
			db = connection.db();
		}
	});

	afterAll(async () => {
		await connection.close();
	});

	it('should process a single doc', async () => {
		const users = db.collection('users');

		const mockUser: any = {name: 'test'};
		await users.insertOne(mockUser);

		const insertedUser = await users.findOne({name: 'test'});
		expect(insertedUser).toEqual(mockUser);
	});
});
