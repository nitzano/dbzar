import {MongoClient} from 'mongodb';
import {CollectionConfig, Config} from '../../config/types';

export class MongoProcessor {
	private readonly client: MongoClient;

	constructor(private readonly config: Config, private readonly uri: string) {
		this.client = new MongoClient(this.uri);
	}

	async processDb(dbName: string): Promise<void> {
		try {
			await this.client.connect();
			console.log('Connected to server');

			const db = this.client.db(dbName);

			const collections = db.listCollections();
			console.log(`collections = ${JSON.stringify(collections.map(({name}) => name))}`);
		} catch (error: unknown) {
			console.error(error);
		} finally {
			await this.client.close();
		}
	}

	async processCollection(collectionName: string, collectionConfig: CollectionConfig) {
		// Get the collection from the config
		console.log(collectionName);
		console.log(collectionConfig.name);

		// Process every document
	}
}
