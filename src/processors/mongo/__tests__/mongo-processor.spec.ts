import process from 'process';
import {type Db, MongoClient, type MongoClientOptions} from 'mongodb';
import {MaskAnonymizer} from '../../../anonymizers/mask/mask-anonymizer';
import {type Anonymizer} from '../../../anonymizers/types';
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

	afterEach(async () => {
		await db.dropDatabase();
	});

	afterAll(async () => {
		await connection.close();
	});

	it('should process a single doc', async () => {
		const users = db.collection('users');

		// Insert a document
		const mockUser: any = {firstName: 'test'};
		await users.insertOne(mockUser);

		// Anonymize the users database
		if (process.env.MONGO_URL) {
			const mongoProcessor = new MongoProcessor(process.env.MONGO_URL);
			const anonymizer: Anonymizer = new MaskAnonymizer();
			await mongoProcessor.processColumn('users', 'firstName', anonymizer);
		}

		// Find the document again
		const insertedUser: any = await users.findOne();
		expect(insertedUser.firstName as string).toEqual('****');
	});

	it('should process multiple docs', async () => {
		const users = db.collection('users');

		// Insert a document
		await users.insertMany([{firstName: 'aaaa'}, {firstName: 'bbbb'}]);

		// Anonymize the users database
		if (process.env.MONGO_URL) {
			const mongoProcessor = new MongoProcessor(process.env.MONGO_URL);
			const anonymizer: Anonymizer = new MaskAnonymizer();
			await mongoProcessor.processColumn('users', 'firstName', anonymizer);
		}

		// Find the document again
		const cursor = users.find();

		for await (const doc of cursor) {
			expect(doc.firstName as string).toEqual('****');
		}
	});
});
