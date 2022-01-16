import {MongoClient} from 'mongodb';
import {Config} from '../../config/types';

export class MongoProcessor {
	constructor(private readonly config: Config, private readonly uri: string) {}

	async processDb(dbName: string): Promise<void> {
		const client = new MongoClient(this.uri);

		try {
			await client.connect();
			console.log('Connected to server');

			const db = client.db(dbName);

			const collections = db.listCollections();
			console.log(`collections = ${JSON.stringify(collections.map(({name}) => name))}`);
		} catch (error: unknown) {
			console.error(error);
		} finally {
			await client.close();
		}
	}
}
