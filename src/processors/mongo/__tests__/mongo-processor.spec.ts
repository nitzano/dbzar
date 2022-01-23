import process from 'process';
import {Db, MongoClient, MongoClientOptions} from 'mongodb';
import {Config} from '../../../config/types';
import {MongoProcessor} from '../mongo-processor';

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

		// Insert a document
		const mockUser: any = {name: 'test'};
		await users.insertOne(mockUser);

		const config: Config = {
			engine: 'mongodb',
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

		if (process.env.MONGO_URL) {
			const mongoProcessor = new MongoProcessor(config, process.env.MONGO_URL);
			await mongoProcessor.processDb(db.databaseName);
		}

		// Anonymize the users database

		// Find the document again
		const insertedUser = await users.findOne({firstName: 'test'});
		expect(insertedUser).toEqual(mockUser);
	});
});
