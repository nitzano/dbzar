import process from 'process';
import {Db, MongoClient, MongoClientOptions} from 'mongodb';

describe('insert', () => {
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
		// Await db.close();
	});

	it('should insert a doc into collection', async () => {
		const users = db.collection('users');

		const mockUser: any = {_id: 'some-user-id', name: 'John'};
		await users.insertOne(mockUser);

		const insertedUser = await users.findOne({_id: 'some-user-id'});
		expect(insertedUser).toEqual(mockUser);
	});
});
